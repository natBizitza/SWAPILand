import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(public http: HttpClient) { }

  getSwapi() {
    return this.http.get('https://swapi.dev/api/people/');
  }
}
