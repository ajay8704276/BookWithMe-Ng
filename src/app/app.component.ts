import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Ajay I am from app.component.ts file ';

  clickHandler() {
    alert('Hello I am Clicked ');
  }
}
