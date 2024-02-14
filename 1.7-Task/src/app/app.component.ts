import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tag;
  constructor(public meta: Meta) {
    this.meta.addTag({ name: 'og:desc', content: 'root_desc' });
    this.tag = this.meta.getTag('name=og:desc');
  }

  title = 'MySevenApp';
}
