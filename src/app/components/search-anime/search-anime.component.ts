import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Anime } from 'src/app/interfaces/api-animes';
import { AnimeService } from 'src/app/services/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.scss'],
})
export class SearchAnimeComponent implements OnInit {
  anime_encontrado: Anime[] = [];
  @ViewChild('inputSearchAnime', { static: true })
  inputSearchAnime!: ElementRef;

  constructor(private animeService: AnimeService, private router: Router) {}

  ngOnInit(): void {}

  search(value: string) {
    if (value && value.length > 3) {
      this.router.navigate([''], {
        queryParams: { q: value },
      });
    }
  }
}
