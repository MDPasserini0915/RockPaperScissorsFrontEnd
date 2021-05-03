import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
    const year = 20;
    console.log('this.year = ' + this.year);
    console.log('year = ' + year);
  }

  ngOnInit(): void {
    console.log('init: this.year = ' + this.year);
    // console.log('init: year = ' + year);
  }

}
