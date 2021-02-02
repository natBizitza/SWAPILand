import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/movies.service';
import { PlanetsService } from 'src/app/planets/planets.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  movies: any[];
  planets: any[];

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
    this.planetService.getPlanetFromUrl(this.character.homeworld).subscribe((data: any) =>
    this.planets.push(data));

    this.character.films.forEach((element: any) => {
      this.movieService.getMovieFromUrl(element).subscribe((data: any) =>
      this.movies.push(data));
      console.log(this.movies);
    });
  }

}
