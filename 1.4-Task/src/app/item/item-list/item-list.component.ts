import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activeRouter.snapshot.queryParams);
  }
}
