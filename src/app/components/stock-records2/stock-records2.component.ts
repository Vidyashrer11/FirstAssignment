import { Component, OnInit } from '@angular/core';
import { IStockDetail } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-records2',
  templateUrl: './stock-records2.component.html',
  styleUrls: ['./stock-records2.component.less']
})
export class StockRecords2Component implements OnInit {
  public stockRecords: IStockDetail[];
  constructor() {
    this.stockRecords=[]
   }

  ngOnInit(): void {
    this.stockRecords=[{
      id:1,
      stockName:"tiger",
      stockMarcketCap:123,
      stockSector:"wild",
      releaseDate: "22/2/23",
      symbol:"non veg"
    }, {
      id:2,
      stockName:"lion",
      stockMarcketCap:456,
      stockSector:"wild",
      releaseDate: "22/2/23",
      symbol:"non veg"
    },{
      id:3,
      stockName:"cheetha",
      stockMarcketCap:789,
      stockSector:"wild",
      releaseDate: "22/2/23",
      symbol:"non veg"
    },{
      id:4,
      stockName:"dear",
      stockMarcketCap:789,
      stockSector:"wild",
      releaseDate: "22/2/23",
      symbol:"veg"
    }
  

    ]
  }

}
