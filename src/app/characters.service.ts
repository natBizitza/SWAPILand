import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(public http: HttpClient) { }

  getCharacters() {
    return this.http.get('https://swapi.dev/api/people/');
  }

  getCharacterFromUrl(url:string) {
    return this.http.get(url);
  }
}
