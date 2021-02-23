import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, tap } from 'rxjs/operators';
import { SwapiService } from './swapi-service/swapi.service';

@Component({
  selector: 'app-swapi-search',
  templateUrl: './swapi-search.component.html',
  styleUrls: ['./swapi-search.component.scss']
})

export class SwapiSearchComponent implements OnInit {
  swapis$: Observable<any[]> | undefined;
  private searchTerms = new Subject<string>();

  constructor(private swapiService: SwapiService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
     this.swapis$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.swapiService.searchGlobalSwapi(term)),
      map((swp: any) => swp.filter((swpFilter: any) => swpFilter.results[0] !== undefined).map((swpElem: any) => swpElem.results[0]))
    );
  }

}
