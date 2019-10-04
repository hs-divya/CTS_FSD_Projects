import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: any;
  constructor() {
    this.home = [
      'Experience in Angular and JAVA.',
      'Involved in various projects implementing Waterfall SDLC methodologies',
      'Good Team player and quick learner'
    ];
  }

  ngOnInit() {
  }

}
