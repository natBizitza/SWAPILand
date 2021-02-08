import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }

  getMovies() {
    return this.http.get('https://swapi.dev/api/films/');
  }

  getMovieFromUrl(url:string) {
    return this.http.get(url);
  }
}
