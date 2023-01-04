import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Nome completo', name: 'Órgão xxx', weight: 46001.000811/2021-34, symbol: 'Em Andamento'},
  {position: 'Nome completo', name: 'Órgão xxx', weight: 46001.000811/2021-34, symbol: 'Em Andamento'},
  {position: 'Nome completo', name: 'Órgão xxx', weight: 46001.000811/2021-34, symbol: 'Em Andamento'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
