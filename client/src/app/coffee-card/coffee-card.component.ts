import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.css']
})
export class CoffeeCardComponent implements OnInit {

  @Input() name!: string;
  @Input() price!: number;
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
