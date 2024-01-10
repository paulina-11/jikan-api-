import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIAnime, Anime } from '../interfaces/api-animes';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private API_ANIME = 'https://api.jikan.moe/v4/anime';

  constructor(private http: HttpClient) {}

  getProfile(mal_id: number): Observable<APIAnime> {
    return this.http.get<APIAnime>(`${this.API_ANIME}/${mal_id}`);
  }

  getAnimeSearch(query = ''): Observable<APIAnime> {
    return this.http.get<APIAnime>(`${this.API_ANIME}?q=${query}`);
  }
}
