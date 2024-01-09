import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsAnimesComponent } from './components/cards-animes/cards-animes.component';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { FavoriteAnimeComponent } from './components/favorite-anime/favorite-anime.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchAnimeComponent } from './components/search-anime/search-anime.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardsAnimesComponent,
    DetailAnimeComponent,
    FavoriteAnimeComponent,
    SearchAnimeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
