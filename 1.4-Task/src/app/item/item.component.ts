import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activeRouter.snapshot.params);
  }

}
