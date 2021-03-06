import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planet-service/planets.service';

@Component({
  selector: 'app-planet-scene',
  templateUrl: './planet-scene.component.html',
  styleUrls: ['./planet-scene.component.scss']
})
export class PlanetSceneComponent implements OnInit {
  planets: any;
  display: boolean = false;

  constructor(public planetService: PlanetsService) { }

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe((data: any) =>
    this.planets = data.results);
  }

  showDialog() {
      this.display = true;
  }

  cancel() {
    
  }
}
