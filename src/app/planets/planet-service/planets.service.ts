import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(public http: HttpClient) { }

  getPlanets() {
    return this.http.get('https://swapi.dev/api/planets/');
  }

  getPlanetFromUrl(url:string) {
    return this.http.get(url);
  }
}
