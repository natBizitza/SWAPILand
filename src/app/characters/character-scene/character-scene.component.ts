import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/characters.service';

@Component({
  selector: 'app-character-scene',
  templateUrl: './character-scene.component.html',
  styleUrls: ['./character-scene.component.scss']
})
export class CharacterSceneComponent implements OnInit {
  characters: any;

  constructor(public characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any) =>
    this.characters = data.results);
  }

}
