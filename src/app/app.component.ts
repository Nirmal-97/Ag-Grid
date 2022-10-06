import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
  ValueFormatterParams,
} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellComponent } from './my-cell/my-cell.component';
import { IOlympicData } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ag-grid-task';
  rowData$!: Observable<any[]>;

  private gridApi!: GridApi<IOlympicData>;

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
      cellRenderer: MyCellComponent,
    },
    {
      field: 'weightedAvgPrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
    },
    {
      field: 'prevClosePrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
    },
    {
      field: 'lastPrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
    },
    {
      field: 'lastQty',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
    },
    {
      field: 'bidPrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
    },
    { field: 'bidQty', cellClass: 'ag-right-aligned-cell' },
    { field: 'askPrice', cellClass: 'ag-right-aligned-cell' },
    {
      field: 'askQty',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
    },
    { field: 'openPrice', cellClass: 'ag-right-aligned-cell' },
    { field: 'highPrice', cellClass: 'ag-right-aligned-cell' },
    { field: 'lowPrice', cellClass: 'ag-right-aligned-cell' },
    {
      field: 'volume',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
    },
    { field: 'quoteVolume', cellClass: 'ag-right-aligned-cell' },
    { field: 'openTime', cellClass: 'ag-right-aligned-cell' },
    { field: 'closeTime', cellClass: 'ag-right-aligned-cell' },
    { field: 'firstId', cellClass: 'ag-right-aligned-cell' },
    { field: 'lastId', cellClass: 'ag-right-aligned-cell' },
    { field: 'count', cellClass: 'ag-right-aligned-cell' },
  ];

  public rowData!: IOlympicData[];

  constructor(public http: HttpClient) {}

  onBtExport() {
    this.gridApi.exportDataAsExcel();    
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;

    this.http
      .get<IOlympicData[]>('https://api2.binance.com/api/v3/ticker/24hr')
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  ngOnInit() {}

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
    floatingFilter: true,
    resizable: true,
  };

  // gridOptions = {
  //   colDefs: [
  //     { field: 'priceChange' },
  //     {
  //       headerName: 'Price Chnage',
  //       field: 'priceChange',
  //       valueFormatter: (params: ValueFormatterParams) => parseInt(params.value).toFixed(2)
  //     },
  //   ],
  // };
}
