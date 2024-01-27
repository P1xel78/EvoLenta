import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  interval: ReturnType<typeof setInterval> | undefined;
  num = 0;
  constructor() {}

  plus(): void {
    this.num += 1;
  }

  minus(): void {
    this.num -= 1;
  }
  ngOnInit() {}

  ngOnDestroy() {}
}
