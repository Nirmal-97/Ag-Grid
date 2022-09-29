import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

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
    { field: 'priceChange' },
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

  constructor(private http: HttpClient) {}

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
