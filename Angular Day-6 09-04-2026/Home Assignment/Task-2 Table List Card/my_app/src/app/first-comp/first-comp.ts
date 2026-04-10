import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  view = 'list';

  users = [
    { name: 'Kaustubh', age: 21; city: 'Jaipur' },
    { name: 'Rahul', age: 29, city: 'Delhi' },
    { name: 'Amit', age: 30, city: 'Mumbai' }
  ];

  setType(type: string) {
    this.view = type;
  }
}
