import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from '../character';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
  @ViewChild('characterForm') public characterForm: NgForm | undefined;

  constructor() {
  }

  eyeColors = ['Spicy red', 'Hot yellow', 'Sky blue', 'n/a', 'unknown', 'Fresh green'];
  genders = ['n/a', 'Male', 'Female', 'unknown'];

  model = new Character (12, '', undefined, undefined, '', '', '', '');
  submitted = false;


  onSubmit() { 
    this.submitted = true;
    /* if (this.characterForm){this.characterForm.reset(); } */ }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  ngOnInit(): void {
  }

  newCharacter() {
    this.model = new Character (12, '', 123, 130, 'Shiny blond', 'Spicy red', '18 BC', 'Female');
  }
}
