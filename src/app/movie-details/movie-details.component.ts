import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CharactersService } from '../characters.service';
import { PlanetsService } from '../planets/planets.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  characters: any[];
  planets: any[];

  constructor(
    private location: Location,
    public characterService: CharactersService,
    public planetService: PlanetsService) {
    this.characters = [];
    this.planets = [];

  }

  ngOnInit(): void {
    console.log(this.location.getState());

    this.movie = this.location.getState();
    
    // get films
    if (this.movie){
        this.movie.characters.forEach((element: any) => {
        this.characterService.getCharacterFromUrl(element).subscribe((data: any) =>
        this.characters.push(data));
      });
    }

    // get planets
    this.movie.planets.forEach((element: any) => {
      this.planetService.getPlanetFromUrl(element).subscribe((data: any) =>
      this.planets.push(data));
    });
  }
}
