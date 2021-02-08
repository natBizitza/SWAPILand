import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { CharacterSceneComponent } from './characters/character-scene/character-scene.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-scene/movie-details.component';
import { MoviePageComponent } from './movies/movie-details/movie-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';
import { PlanetSceneComponent } from './planets/planet-scene/planet-scene.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviePageComponent},
  {path: 'characters', component: CharacterSceneComponent},
  {path: 'planets', component: PlanetSceneComponent},
  {path: 'planets/planet-details', component: PlanetDetailsComponent},
  {path: 'movies/movie-details', component: MovieDetailsComponent},
  {path: 'characters/character-details', component: CharacterDetailsComponent},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
