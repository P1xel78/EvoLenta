import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrl: './inline.component.css',
})
export class InlineComponent {
  tag1;
  tag2;
  tag3;
  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'og:title', content: 'The Rock' },
      { name: 'og:type', content: 'video.movie' },
      { name: 'og:url', content: '//www.imdb.com/title/tt0117500/' },
    ]);
    this.tag1 = this.meta.getTag('name=og:title');
    this.tag2 = this.meta.getTag('name=og:type');
    this.tag3 = this.meta.getTag('name=og:url');
  }
}
