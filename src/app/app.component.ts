import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColDef, GridOptions} from 'ag-grid-community';
import { CellRendererComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { filter, Observable } from 'rxjs';
import { MyCellComponent } from './my-cell/my-cell.component';
// import { CsvExportModule } from '@ag-grid-community/csv-export'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, GridOptions {
  title = 'ag-grid-task';
  rowData$!: Observable<any[]>;

  colDefs: ColDef[] = [
    { field: 'symbol' },
    {
      field: 'priceChange',
      cellRenderer: MyCellComponent,
      cellClass: 'ag-right-aligned-cell',
    },
    {
      field: 'priceChangePercent',
      cellClass: 'ag-right-aligned-cell',
    },
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

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>(
      'https://api2.binance.com/api/v3/ticker/24hr'
    );
  }

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };

  GridOptions = {
    colDefs: [
      // {
      //   field: 'priceChange',
      // },
      {
        headerName: 'Price Change',
        field: 'priceChange',
        cellRenderer: (params: any) => params.data.priceChange.toFixed(2),
      },
    ],
  };

//   function onBtnExport() {
//   .api!.exportDataAsCsv();
// }

};

