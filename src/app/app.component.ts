import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AgChartThemeOverrides,
  ChartMenuOptions,
  ColDef,
  CreateRangeChartParams,
  FirstDataRenderedEvent,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellComponent } from './my-cell/my-cell.component';
import { IOlympicData } from './app.interface';
import 'ag-grid-enterprise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ag-grid-task';
  rowData$!: Observable<any[]>;

  private gridApi!: GridApi<IOlympicData>;
  public popupParent: HTMLElement | null = document.body;

  colDefs: ColDef[] = [
    { field: 'symbol', chartDataType: 'category' },
    {
      field: 'priceChange',
      cellRenderer: MyCellComponent,
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'priceChangePercent',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'weightedAvgPrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'prevClosePrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'lastPrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'lastQty',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'bidPrice',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'bidQty',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'askPrice',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'askQty',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'openPrice',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'highPrice',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'lowPrice',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'volume',
      cellClass: 'ag-right-aligned-cell',
      cellRenderer: MyCellComponent,
      chartDataType: 'series',
    },
    {
      field: 'quoteVolume',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'openTime',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'closeTime',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'firstId',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'lastId',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
    {
      field: 'count',
      cellClass: 'ag-right-aligned-cell',
      chartDataType: 'series',
    },
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
    enableRowGroup: true,
  };

  public chartThemeOverrides: AgChartThemeOverrides = {
    pie: {
      title: {
        enabled: true,
        text: 'Precious Metals Production',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgb(100, 100, 100)',
      },
      subtitle: {
        enabled: true,
        text: 'by country',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'rgb(100, 100, 100)',
      },
      padding: {
        top: 25,
        right: 20,
        bottom: 55,
        left: 20,
      },
      legend: {
        enabled: false,
      },
      series: {
        label: {
          enabled: true,
        },
        callout: {
          length: 20,
        },
      },
    },
  };

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    var createRangeChartParams: CreateRangeChartParams = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 5,
        columns: ['country', 'gold'],
      },
      chartType: 'pie',
    };
    params.api.createRangeChart(createRangeChartParams);
  }

  getChartToolbarItems(): ChartMenuOptions[] {
    return ['chartDownload', 'chartData', 'chartSettings'];
  }

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

