import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  items = [{
    id: 1,
    title: 'circle',
    description: 'Perfect choice when you don\'t need any corners.',
    avatar: 'ellipse.png',
    price: 999
  }, {
    id: 2,
    title: 'rectangle',
    description: 'For once, it\'s a great idea to think inside the box.',
    avatar: 'rectangle.png',
    price: 899
  }, {
    id: 3,
    title: 'triangle',
    description: 'A true classic with three elegant corners.',
    avatar: 'polygon.png',
    price: 1009
  }];

  constructor() { }

  ngOnInit(): void {
  }
}
