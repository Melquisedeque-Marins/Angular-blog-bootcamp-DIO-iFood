import { Component, OnInit } from '@angular/core';
import { dataFake, dataModel } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemList:dataModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setValuestoItem();
    console.log(this.itemList);
  }

  setValuestoItem() {
    for (let i=0; i < dataFake.length; i++ ) {
      this.itemList.push(dataFake[i]);
    }
  }

}
