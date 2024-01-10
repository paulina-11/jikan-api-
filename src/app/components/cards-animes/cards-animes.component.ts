import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter, take } from 'rxjs/operators';

import { Anime } from 'src/app/interfaces/api-animes';
import { AnimeService } from 'src/app/services/anime.service';
@Component({
  selector: 'app-cards-animes',
  templateUrl: './cards-animes.component.html',
  styleUrls: ['./cards-animes.component.scss'],
})
export class CardsAnimesComponent implements OnInit {
  anime_results: Anime[] = [];
  query: string = '';

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  getDataFromService(): void {
    this.animeService.getAnimeSearch(this.query).subscribe((result) => {
      if (result?.data?.length) {
        this.anime_results = [...result.data];
      } else {
        this.anime_results = [];
      }
    });
  }

  onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.anime_results = [];
        this.getCharactersByQuery();
      });
  }
}
