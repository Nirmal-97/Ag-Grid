import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, ValueFormatterService } from 'ag-grid-community';
import { CellRendererComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { Observable } from 'rxjs';
import { MyCellComponent } from './my-cell/my-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ag-grid-task';
  rowData$!: Observable<any[]>;

  colDefs: ColDef[] = [
    { field: 'symbol' },
    { field: 'priceChange', cellRenderer: MyCellComponent},
    { field: 'priceChangePercent' },
    { field: 'weightedAvgPrice' },
    { field: 'prevClosePrice' },
    { field: 'lastPrice' },
    { field: 'lastQty' },
    { field: 'bidPrice' },
    { field: 'bidQty' },
    { field: 'askPrice' },
    { field: 'askQty' },
    { field: 'openPrice' },
    { field: 'highPrice' },
    { field: 'lowPrice' },
    { field: 'volume' },
    { field: 'quoteVolume' },
    { field: 'openTime' },
    { field: 'closeTime' },
    { field: 'firstId' },
    { field: 'lastId' },
    { field: 'count' },
  ];

  // private columnDefs = [
  //   {
  //     headerName: "Price Change",
  //     field: 'priceChange',
  //     cellRender: (params: { data: { priceChange: number; }; }) => params.data.priceChange.toFixed(2)
  //   }
  // ];

  constructor(private http: HttpClient) {
      // var gridOptions = {
      //   columnDefs: [
      //     {
      //       field: 'priceChange',
      //     },

      //     {
      //       headerName: 'Price Change',
      //       field: 'priceChange',
      //       valueFormatter: (params: { data: { priceChange: any } }) =>
      //         params.data.priceChange.toFixed(2),
      //     },
      //   ],
      // };
  }

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>(
      'https://api2.binance.com/api/v3/ticker/24hr'
    );  
    
   
  }


  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
}
