import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
@Input() sideNavStatus: boolean = false;
//   List=[{
//     number:'1',
//     name:'Home',
//     icon:'fa fa-solid fa-bars'},
//   {number:'2',
//   name:'About',
//   icon:'fa fa-solid fa-bars'},
//   {number:'3',
//   name:'Contact',
//   icon:'fa fa-solid fa-bars'},
//   {number:'4',
//   name:'Properties',
//   icon:'fa fa-solid fa-bars'},
//   {number:'5',
//   name:'Setting',
//   icon:'fa fa-solid fa-bars'},
// ]
  constructor() { }

  ngOnInit(): void {
  }

}
