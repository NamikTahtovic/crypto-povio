import {CryptoCurrency} from '../../shared/models/CryptoCurrency';
import {CryptoCurrencyActionTypes} from './crypto-currency.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

// define a state
export interface CryptoCurrenciesState extends EntityState<CryptoCurrency> {
  selectedCryptoCurrencyId: string | null;
}

// create entity adapter
export const adapter: EntityAdapter<CryptoCurrency> = createEntityAdapter<CryptoCurrency>();

// define a initial state
export const initialState: CryptoCurrenciesState = adapter.getInitialState({
  selectedCryptoCurrencyId: null
});

// create simple reducer
export function cryptoCurrencyReducers(state = initialState, action): CryptoCurrenciesState {
  switch (action.type) {
    case CryptoCurrencyActionTypes.CryptoCurrencySelected:
      return Object.assign({}, state, {selectedCryptoCurrencyId: action.payload});

    case CryptoCurrencyActionTypes.CryptoCurrenciesLoaded:
      return adapter.addAll(action.payload.data, state);

    default:
      return state;
  }
}

// selectors
export const getSelectedCryptoCurrencyId = (state: CryptoCurrenciesState) => state.selectedCryptoCurrencyId;

const {selectIds, selectEntities, selectAll} = adapter.getSelectors();

export const selectCryptoCurrencyIds = selectIds;
export const selectCryptoCurrencyEntities = selectEntities;
export const selectAllCryptoCurrencies = selectAll;
