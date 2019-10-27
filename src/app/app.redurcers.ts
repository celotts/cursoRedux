import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';

import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroAction from './filter/filter.actions'
export interface AppState {
  todos: Todo[];
  filtro: fromFiltroAction.filtrosValidos;
}

// Constante que almacena todo los reducer de la app

export const AppReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};
