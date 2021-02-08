import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CharacterFormComponent } from './characters/character-form/character-form.component';
import { HomeComponent } from './home/home.component';
import { PlanetFormComponent } from './planets/planet-form/planet-form.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import {GalleriaModule} from 'primeng/galleria';


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
    PlanetDetailsComponent,
    CharacterFormComponent,
    HomeComponent,
    PlanetFormComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    DialogModule,
    ButtonModule,
    GalleriaModule
  ],
  providers: [SwapiService, MoviesService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
