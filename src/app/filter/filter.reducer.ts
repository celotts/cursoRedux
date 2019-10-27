import * as fromFiltro from './filter.actions';

const estadoIncial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state = estadoIncial, action: fromFiltro.acciones): fromFiltro.filtrosValidos {

  switch (action.type) {
    case fromFiltro.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
}
