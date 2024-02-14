import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  tagApp;
  constructor(private app: AppComponent) {
    this.tagApp = this.app.tag;
  }

}
