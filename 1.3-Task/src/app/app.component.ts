import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   users = [{
    name : "Чумаков М.А."
   },
   {
    name : "Сергеев А.Б."
   },
   {
    name : "Давыдов С.П."
   }
  ];
  date = new Date();
  value = 10;
}
