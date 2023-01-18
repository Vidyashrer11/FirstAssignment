import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockRecords2Component } from './components/stock-records2/stock-records2.component';
import { StockRecords1Component } from './components/stock-records1/stock-records1.component';
import { ListComponent } from './module/list/list/list.component';
import { LoginComponent } from './module/login/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    StockRecords2Component,
    StockRecords1Component
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
