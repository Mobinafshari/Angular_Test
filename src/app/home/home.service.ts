import { Injectable } from '@angular/core';
import { IOlympicData } from './home.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  rowData: IOlympicData[] = [];
  constructor() {}

  getData(): IOlympicData[] {
    return this.rowData;
  }
  // updateData(rows: IOlympicData[]): void {
  //   const rowMap = new Map(rows.map((r) => [r.id, r]));
  //   this.rowData = this.rowData.map((row) => (rowMap.has(row.id) ? rowMap.get(row.id)! : row));
  //   localStorage.setItem('rows', JSON.stringify(this.rowData));
  // }
}
