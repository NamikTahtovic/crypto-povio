import * as fromFiatCurrencies from './fiat-currencies/fiat-currency.reducer';
import * as fromCryptoCurrencies from './crypto-currencies/crypto-currency-reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {CryptoCurrency} from '../shared/models/CryptoCurrency';

// updated shape of application state
export interface AppState {
  fiatCurrencies: fromFiatCurrencies.FiatCurrenciesState;
  cryptoCurrencies: fromCryptoCurrencies.CryptoCurrenciesState;
}

// added feature reducer in combined reducer
export const reducers: ActionReducerMap<AppState> = {
  fiatCurrencies: fromFiatCurrencies.fiatCurrencyReducers,
  cryptoCurrencies: fromCryptoCurrencies.cryptoCurrencyReducers
};


// FiatCurrencies selectors
export const selectFiatCurrencyState = createFeatureSelector<fromFiatCurrencies.FiatCurrenciesState>('fiatCurrencies');
export const selectFiatCurrencyIds = createSelector(
  selectFiatCurrencyState,
  fromFiatCurrencies.selectFiatCurrencyIds
);
export const selectFiatCurrencyEntities = createSelector(
  selectFiatCurrencyState,
  fromFiatCurrencies.selectFiatCurrencyEntities
);
export const selectAllFiatCurrencies = createSelector(
  selectFiatCurrencyState,
  fromFiatCurrencies.selectAllFiatCurrencies
);

// CryptoCurrencies selectors
export const selectCryptoCurrencyState = createFeatureSelector<fromCryptoCurrencies.CryptoCurrenciesState>('cryptoCurrencies');
export const selectCryptoCurrencyIds = createSelector(
  selectCryptoCurrencyState,
  fromCryptoCurrencies.selectCryptoCurrencyIds
);
export const selectCryptoCurrencyEntities = createSelector(
  selectCryptoCurrencyState,
  fromCryptoCurrencies.selectCryptoCurrencyEntities
);
export const selectAllCryptoCurrencies = createSelector(
  selectCryptoCurrencyState,
  fromCryptoCurrencies.selectAllCryptoCurrencies
);

export const selectCryptoCurrencyById = createSelector(
  selectCryptoCurrencyEntities,
  fromCryptoCurrencies.getSelectedCryptoCurrencyId,
  (cryptoCurrencyEntities, cryptoCurrencyId) => cryptoCurrencyEntities[cryptoCurrencyId]
);
