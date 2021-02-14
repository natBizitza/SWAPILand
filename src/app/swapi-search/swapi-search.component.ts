import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { CharactersService } from '../characters/character-service/characters.service';

@Component({
  selector: 'app-swapi-search',
  templateUrl: './swapi-search.component.html',
  styleUrls: ['./swapi-search.component.scss']
})
export class SwapiSearchComponent implements OnInit {
  characters$: Observable<any[]> | undefined;
  private searchTerms = new Subject<string>();

  constructor(private characterService: CharactersService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
     this.characters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.characterService.searchCharacters(term)),
     // map((characters:any) =>{ this.characters$  = characters.results; console.log(characters.results)})

    );
  }

}
