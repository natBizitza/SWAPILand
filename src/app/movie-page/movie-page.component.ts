import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  movies: any;
  display: boolean = false;

  constructor(public movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) =>
    this.movies = data.results);
  }

  showDialog() {
    this.display = true;
  }

  cancel() {
    
  }
}
