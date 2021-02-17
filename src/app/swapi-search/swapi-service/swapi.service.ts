import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(public http: HttpClient) { }

  searchGlobalSwapi(term: string): Observable<any[]> {
    const people = this.http.get(`https://swapi.dev/api/people/?search=${term}`);
    const movies = this.http.get(`https://swapi.dev/api/films/?search=${term}`);
    const planets = this.http.get(`https://swapi.dev/api/planets/?search=${term}`);

    if (!term.trim()) {
      // if not search term, return empty char array.
      return of([]);
    }
    //return this.http.get<any[]>(`https://swapi.dev/api/people/?search=${term}`)
    return forkJoin([people, movies, planets]).pipe(
      tap(x => x.length ?
         console.log(`found characters matching "${term}"`) :
         console.log(`no characters matching "${term}"`)),
      catchError(this.handleError<any[]>('searchCharacters', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
