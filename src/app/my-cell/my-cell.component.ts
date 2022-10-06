import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  template: `{{ value }}`,
  styles: [],
})
export class MyCellComponent implements OnInit, ICellRendererAngularComp {
  value: any;

  constructor() {}
  agInit(params: ICellRendererParams<any, any>): void {
    console.log('params', typeof params.value);
    this.value =  parseInt(params.value).toFixed(2);
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {}
}
