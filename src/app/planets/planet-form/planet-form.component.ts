import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/characters.service';
import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.scss']
})
export class PlanetFormComponent implements OnInit {
  creators: any;
  terrainTypes: any;
  submitted = false;
  
  constructor(
    public characterService: CharactersService,
    public planetService: PlanetsService) { }

  model = new Planet (1, '', '', '', '', '');
  
  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any) =>
    this.creators = data.results.map((item:any)=> item.name));

    this.planetService.getPlanets().subscribe((data: any) =>
    this.terrainTypes = data.results.map((item:any)=> item.terrain));
  }

  onSubmit() { 
    this.submitted = true;
   }

}
