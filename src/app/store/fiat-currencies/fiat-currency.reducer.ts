import {FiatCurrency} from '../../shared/models/FiatCurrency';
import {FiatCurrencyActionTypes} from './fiat-currency.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

// define a state
export interface FiatCurrenciesState extends EntityState<FiatCurrency> {
  selectedFiatCurrencyName: string | null;
}

// create entity adapter
export const adapter: EntityAdapter<FiatCurrency> = createEntityAdapter<FiatCurrency>();

// define a initial state
export const initialState: FiatCurrenciesState = adapter.getInitialState({
  selectedFiatCurrencyName: 'USD'
});

// create simple reducer
export function fiatCurrencyReducers(state = initialState, action): FiatCurrenciesState {
  switch (action.type) {
    case FiatCurrencyActionTypes.FiatCurrencySelected:
      return Object.assign({}, state, {selectedFiatCurrencyName: action.payload});

    case FiatCurrencyActionTypes.LoadFiatCurrencies:
      return adapter.addMany(action.payload, state);

    default:
      return state;
  }
}

// selectors
export const getSelectedFiatCurrencyName = (state: FiatCurrenciesState) => state.selectedFiatCurrencyName;

const {selectIds, selectEntities, selectAll} = adapter.getSelectors();

export const selectFiatCurrencyIds = selectIds;
export const selectFiatCurrencyEntities = selectEntities;
export const selectAllFiatCurrencies = selectAll;
