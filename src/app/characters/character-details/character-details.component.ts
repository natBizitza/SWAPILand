import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  movies: any[];

  constructor(
    private location: Location,
    public movieService: MoviesService) {
      this.movies = [];

    }

  ngOnInit(): void {

    this.character = this.location.getState();
    console.log(this.location.getState());

    this.character.films.forEach((element: any) => {
      this.movieService.getMovieFromUrl(element).subscribe((data: any) =>
      this.movies.push(data));
      console.log(this.movies);
    });
  }

}
