import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';;

@Component({
  selector: 'app-swapi-item',
  templateUrl: './swapi-item.component.html',
  styleUrls: ['./swapi-item.component.scss']
})
export class SwapiItemComponent implements OnInit {
  people: any;

  swapiSurvey = {
    name: '',
    favSwapi: '',
    comments: ''
  };

  todaysDate = new Date();

  constructor(public swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getSwapi().subscribe((data: any) =>
      this.people = data.results
    );
  }

  sendForm() {
    console.log(this.swapiSurvey);
  }

}
