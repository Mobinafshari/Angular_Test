import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, ValueGetterParams } from 'ag-grid-community';
import { GridRow } from './home.model';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private homeService: HomeService
  ) {}
  changes: GridRow[] = [];
  rowData: GridRow[] = [];
  callBackMessage?: string;
  ngOnInit() {
    this.rowData = this.homeService.getData();
    const sub = this.activatedRoute.queryParamMap.subscribe((val) => {
      console.log('===>', val.get('cb'));
      this.callBackMessage =
        val.get('cb') === 'failedLogin'
          ? 'Oops seems you couldent login, comback later please'
          : undefined;
    });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
  colDefs: ColDef[] = [
    {
      headerName: 'Make & Model',
      valueGetter: (p: ValueGetterParams<GridRow>) => p.data?.make + ' ' + p.data?.model,
      editable: true,
      onCellValueChanged: (event) => (this.changes = [...this.changes, event.data]),
    },
    {
      field: 'price',
      valueFormatter: (p) => '£' + p.value.toLocaleString(),
      editable: true,
      onCellValueChanged: (event) => (this.changes = [...this.changes, event.data]),
    },

    {
      field: 'electric',
      editable: true,
      onCellValueChanged: (event) => (this.changes = [...this.changes, event.data]),
    },
  ];
  updateRows() {
    this.homeService.updateData(this.changes);
  }
}
