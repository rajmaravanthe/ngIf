import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  firstName : string;
  lastName : string;
  clicked : boolean = false;

  displayTitle () {
    this.clicked = true;
    this.title = `${this.firstName}  ${this.lastName}`
  }
}
