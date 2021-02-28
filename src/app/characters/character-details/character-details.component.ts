import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/movies/movie-service/movies.service';
import { PlanetsService } from 'src/app/planets/planet-service/planets.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  movies: any[];
  planets: any[];
  characterId: any;

  constructor(
    private location: Location,
    public movieService: MoviesService,
    public planetService: PlanetsService) {
      this.movies = [];
      this.planets = [];
    }

  ngOnInit(): void {

    this.character = this.location.getState();
    console.log(this.location.getState());
    this.characterId = parseInt((this.character.url[this.character.url.length - 2]), 10);

    this.planetService.getPlanetFromUrl(this.character.homeworld).subscribe((data: any) =>
    this.planets.push(data));

    this.character.films.forEach((element: any) => {
      this.movieService.getMovieFromUrl(element).subscribe((data: any) =>
      this.movies.push(data));
    });
  }

}
