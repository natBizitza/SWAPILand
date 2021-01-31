import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { CharacterSceneComponent } from './characters/character-scene/character-scene.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';
import { PlanetSceneComponent } from './planets/planet-scene/planet-scene.component';
import { SwapiItemComponent } from './swapi-item/swapi-item.component';

const routes: Routes = [
  {path: '', component: SwapiItemComponent},
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
