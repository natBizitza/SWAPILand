import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  constructor() {
   }

  eyeColors = ['Spicy red', 'Hot yellow', 'Sky blue', 'n/a', 'unknown', 'Fresh green'];
  genders = ['n/a', 'Male', 'Female', 'unknown'];

  model = new Character (12, 'Funny genius', 100, 130, 'Shiny blond', 'Spicy red', '18 BC', 'Female');
  // co nst myCharacter = new Character (12, 'Funny genius', 100, 130, 'Shiny blond', 'Spicy red', '18 BC', 'Female');
  submitted = false;


  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  ngOnInit(): void {
  }

  newCharacter() {
    this.model = new Character (12, '', 123, 130, 'Shiny blond', 'Spicy red', '18 BC', 'Female');
  }
}
