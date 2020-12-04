import {Action} from '@ngrx/store';
import {CryptoCurrency} from '../../shared/models/CryptoCurrency';

// all actions on CryptoCurrencies
export enum CryptoCurrencyActionTypes {
  CryptoCurrencySelected = '[CryptoCurrency] Selected',
  LoadCryptoCurrencies = '[CryptoCurrency] Load data',
  CryptoCurrenciesLoaded = '[CryptoCurrency] Data loaded'
}

// actions that wee need
export class SelectCryptoCurrency implements Action {
  readonly type = CryptoCurrencyActionTypes.CryptoCurrencySelected;
  constructor(public  payload: CryptoCurrency) {}
}

export class LoadCryptoCurrencies implements Action {
  readonly type = CryptoCurrencyActionTypes.LoadCryptoCurrencies;
}

export class CryptoCurrenciesLoaded implements Action {
  readonly type = CryptoCurrencyActionTypes.CryptoCurrenciesLoaded;
  constructor(public payload: CryptoCurrency[]) {
  }
}

export type CryptoCurrencyActions = SelectCryptoCurrency
  | LoadCryptoCurrencies
  | CryptoCurrenciesLoaded;
