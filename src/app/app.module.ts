import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiService } from './swapi.service';
import { HttpClientModule } from '@angular/common/http';
import { SwapiItemComponent } from './swapi-item/swapi-item.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { YesNoPipe } from './yes-no.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviesService } from './movies.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CharactersService } from './characters.service';
import { CharacterSceneComponent } from './characters/character-scene/character-scene.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetSceneComponent } from './planets/planet-scene/planet-scene.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SwapiItemComponent,
    FormSubmittedComponent,
    YesNoPipe,
    NavBarComponent,
    MoviePageComponent,
    MovieDetailsComponent,
    CharacterSceneComponent,
    CharacterDetailsComponent,
    PageNotFoundComponent,
    PlanetSceneComponent,
    PlanetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SwapiService, MoviesService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
