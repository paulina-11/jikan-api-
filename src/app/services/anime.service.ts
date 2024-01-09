import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIAnime, Anime } from '../interfaces/api-animes';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private API_ANIME = 'https://api.jikan.moe/v4/anime';
  // private API_SEARCH = 'https://api.jikan.moe/v4/anime?q=';
  private anime_response$ = new Subject<any>();
  constructor(private http: HttpClient) {}

  // getAnimes(): Observable<APIAnime> {
  //   return this.http.get<APIAnime>(this.API_ANIME);
  // }

  // addResultAnime(anime: Anime[]) {
  //   this.anime_response$.next(anime);
  // }

  // getResultAnime(): Observable<Anime[]> {
  //   return this.anime_response$.asObservable();
  // }

  getProfile(mal_id: number): Observable<APIAnime> {
    return this.http.get<APIAnime>(`${this.API_ANIME}/${mal_id}`);
  }

  getAnimeSearch(query = ''): Observable<APIAnime> {
    return this.http.get<APIAnime>(`${this.API_ANIME}?q=${query}`);
  }
}
