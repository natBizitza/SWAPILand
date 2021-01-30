import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any;
  characters: any[];

  constructor(private location: Location, public characterService: CharactersService) {
    this.characters = [];
  }

  ngOnInit(): void {
    console.log(this.location.getState());
    this.movieDetails = this.location.getState();
    if(this.movieDetails){
        this.movieDetails.characters.forEach((element: any) => {
        this.characterService.getCharactersUrl(element).subscribe((data: any) =>
        this.characters.push(data));
      });
    }
  }
}
