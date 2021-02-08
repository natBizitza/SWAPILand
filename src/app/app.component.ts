import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swapi-app';

  constructor() {
    const styles = 'font-size: 1.50em;font-weight: bold;';
    console.log(`%c👋Hey, I'm Natalia Romankevich and thanks for checking out SwapiLand! 😊`, styles);
  }
}
