import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MyCellComponent } from './my-cell/my-cell.component';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { ModuleRegistry } from '@ag-grid-community/core';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { CsvExportModule } from '@ag-grid-community/csv-export'
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';


ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  CsvExportModule,
  ExcelExportModule,
  MenuModule,
  SparklinesModule,
]);

@NgModule({
  declarations: [AppComponent, MyCellComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
