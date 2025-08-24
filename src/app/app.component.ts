import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Calculator } from "./calculator/calculator";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, Calculator],
})
export class AppComponent {}
