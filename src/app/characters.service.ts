import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(public http: HttpClient) { }

  getCharactersUrl(url:string) {
    return this.http.get(url);
  }
}
