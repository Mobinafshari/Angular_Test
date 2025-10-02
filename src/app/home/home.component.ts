import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';
import { GridRow } from './home.model';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private destroyRef: DestroyRef) {}
  callBackMessage?: string;
  ngOnInit() {
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
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];
  rowData: GridRow[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];
}
