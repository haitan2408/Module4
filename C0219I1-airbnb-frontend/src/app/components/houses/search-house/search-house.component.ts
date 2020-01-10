import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-search-house',
  templateUrl: './search-house.component.html',
  styleUrls: ['./search-house.component.css']
})
export class SearchHouseComponent implements OnInit {
  parent = '1';
  child = '0';
  bedroom=1;
  bathroom=1;

  value: number = 600000;
  highValue: number = 8000000;
  options: Options = {
    floor: 500000,
    ceil: 10000000
  };
  
  constructor() { }

  ngOnInit() {
  }
  increasebed(){
    this.bedroom++;
  }
  reductionbed(){
    this.bedroom--;
  }
  increasebath(){
    this.bathroom++;
  }
  reductionbath(){
    this.bathroom--;
  }
}
