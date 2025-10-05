import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClassParams,
  ColDef,
  GetRowIdFunc,
  GetRowIdParams,
  IsRowPinned,
  ValueGetterParams,
} from 'ag-grid-community';
import { IOlympicData } from './home.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  rowData: IOlympicData[] = [];
  callBackMessage?: string;
  rowNumbers = true;
  loading = true;
  ngOnInit() {
    this.httpClient
      .get<IOlympicData[]>('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
      .subscribe((data) => {
        this.rowData = data;
        this.loading = false;
      });
  }

  columnDefs: ColDef[] = [
    { field: 'athlete', enableCellChangeFlash: true },
    {
      field: 'country',
      cellStyle: (params: CellClassParams) => {
        if (params.value === 'United States') {
          return { backgroundColor: 'green' };
        }
        return null;
      },
    },
    { field: 'sport', cellDataType: 'text', cellStyle: { color: 'red', backgroundColor: 'grey' } },
    {
      headerName: 'Total Medals (valueGetter)',
      valueGetter: (p: ValueGetterParams) => p.data.gold + p.data.silver + p.data.bronze,
    },
  ];
  updateRows() {}
  getRowId: GetRowIdFunc = (params: GetRowIdParams) => String(params.data.id);
  isRowPinned: IsRowPinned = (rowNode) => {
    return rowNode.data?.country == null ? 'top' : null;
  };
}
