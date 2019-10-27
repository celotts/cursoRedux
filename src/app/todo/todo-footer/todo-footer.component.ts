import { Component, OnInit } from '@angular/core';

import * as fromFiltro from '../../filter/filter.actions';
import { filtrosValidos } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtroValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  constructor() { }

  ngOnInit() {
  }

}
