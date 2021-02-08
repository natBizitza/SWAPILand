import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies/movie-service/movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  producers: any;
  notFilteredProducers: any;
  submitted = false;

  model = new Movie (1);

  constructor(public movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) =>
    this.notFilteredProducers = data.results.map((item:any)=> item.producer));
  }

  onSubmit() { 
    this.submitted = true;
  }

}
