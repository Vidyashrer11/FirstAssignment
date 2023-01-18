import { Component, OnInit } from '@angular/core';
import { IStockDetail } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-records1',
  templateUrl: './stock-records1.component.html',
  styleUrls: ['./stock-records1.component.less']
})
export class StockRecords1Component implements OnInit {
public stock1Records: IStockDetail;
public isStock1RecordsVisible :Boolean;
public idSection1:Boolean;

  constructor() {
    this.stock1Records ={} as IStockDetail;
    this.isStock1RecordsVisible = false;
    this.idSection1 = true;
 }
public ngOnInit(): void {
    this.stock1Records ={
      id:0,
      stockName:"bioscript inc",
      stockMarcketCap:345.45,
      stockSector:"health care",
      releaseDate:"12/24/23",
      symbol:"bios"
  }
  }
  hideShowTable(){
    this.isStock1RecordsVisible =!this.isStock1RecordsVisible;
  }





  
}






//what is the use of declaringing the type interfaces