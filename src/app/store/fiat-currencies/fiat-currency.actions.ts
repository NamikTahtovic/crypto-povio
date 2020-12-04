import {Action} from '@ngrx/store';
import {FiatCurrency} from '../../shared/models/FiatCurrency';

// all actions on FiatCurrencies
export enum FiatCurrencyActionTypes {
  FiatCurrencySelected = '[FiatCurrency] Selected',
  LoadFiatCurrencies = '[FiatCurrency] Load data',
  FiatCurrenciesLoaded = '[FiatCurrency] Data loaded'
}

// actions that wee need
export class SelectFiatCurrency implements Action {
  readonly type = FiatCurrencyActionTypes.FiatCurrencySelected;
  constructor(public  payload: FiatCurrency) {}
}

export class LoadFiatCurrencies implements Action {
  readonly type = FiatCurrencyActionTypes.LoadFiatCurrencies;
}

export class FiatCurrenciesLoaded implements Action {
  readonly type = FiatCurrencyActionTypes.FiatCurrenciesLoaded;
  constructor(public payload: FiatCurrency[]) {}
}

export type FiatCurrencyActions = SelectFiatCurrency
  | LoadFiatCurrencies
  | FiatCurrenciesLoaded;
