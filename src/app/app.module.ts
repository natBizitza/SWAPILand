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

const routes = [
  {path: '', component: SwapiItemComponent},
  {path: 'submitted', component: FormSubmittedComponent},
  {path: 'movies', component: MoviePageComponent},
  {path: 'people', component: FormSubmittedComponent},
  {path: 'planets', component: FormSubmittedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SwapiItemComponent,
    FormSubmittedComponent,
    YesNoPipe,
    NavBarComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SwapiService,MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
