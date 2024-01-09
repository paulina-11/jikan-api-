import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/interfaces/api-animes';
import { AnimeService } from 'src/app/services/anime.service';
@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.scss'],
})
export class DetailAnimeComponent implements OnInit {
  profileId: any = '';
  anime_selected: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {}
  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('mal_id');
    this.animeService.getProfile(this.profileId).subscribe((res) => {
      this.anime_selected = res.data;
    });
  }
}
