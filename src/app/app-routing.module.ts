import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailAnimeComponent } from './components/detail-anime/detail-anime.component';
import { CardsAnimesComponent } from './components/cards-animes/cards-animes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:mal_id', component: DetailAnimeComponent },
  { path: 'cards', component: CardsAnimesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
