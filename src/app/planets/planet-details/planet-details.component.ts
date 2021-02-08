import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/movies/movie-service/movies.service';
import { CharactersService } from 'src/app/characters/character-service/characters.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planet: any;
  characters: any[];
  movies: any[];
  planetId: any;


  constructor(
    private location: Location,
    public characterService: CharactersService,
    public movieService: MoviesService) {
    this.characters = [];
    this.movies = [];
   }

  ngOnInit(): void {
    this.planet = this.location.getState();
    this.planetId = parseInt(this.planet.url[this.planet.url.length-2]);

    this.planet.residents.forEach((element: any) => {
      this.characterService.getCharacterFromUrl(element).subscribe((data: any) =>
      this.characters.push(data));
    });

    this.planet.films.forEach((element: any) => {
      this.movieService.getMovieFromUrl(element).subscribe((data: any) =>
      this.movies.push(data));
    });
  }

}
