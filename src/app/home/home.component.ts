import { Component, DestroyRef, OnInit, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
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
      flex: 1.5,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Tesla', 'Ford', 'Toyota'],
      },
    },
    {
      field: 'price',
      valueFormatter: (p) => '£' + p.value.toLocaleString(),
      editable: true,
      onCellValueChanged: (event) => (this.changes = [...this.changes, event.data]),
      flex: 1,
    },

    {
      field: 'electric',
      editable: true,
      cellClassRules: {
        'rag-green': (params) => params.value === true,
      },
      onCellValueChanged: (event) => (this.changes = [...this.changes, event.data]),
      flex: 1,
    },
  ];
  updateRows() {
    this.homeService.updateData(this.changes);
  }
}
