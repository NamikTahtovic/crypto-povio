// HELPFUL SNIPPET
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { CryptoCurrency } from '../../shared/models/CryptoCurrency';
import {CryptoCurrenciesLoaded, CryptoCurrencyActionTypes, LoadCryptoCurrencies} from './crypto-currency.actions';
import { CryptoCurrenciesState } from './crypto-currency-reducer';
import {CryptoCurrencyService} from '../../features/crypto-currency/services/crypto-currency.service';

@Injectable({providedIn: 'root'})
export class CryptoCurrencyEffects {
  @Effect() loadCryptoCurrencies$ = this.dataPersistence.fetch(CryptoCurrencyActionTypes.LoadCryptoCurrencies, {
    run: (action: LoadCryptoCurrencies, state: CryptoCurrenciesState) => {
      return this.cryptoCurrencyService.getCryptocurrencies().pipe(
        map((res: CryptoCurrency[]) => new CryptoCurrenciesLoaded(res))
      );
},
    onError: () => {}
  });
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CryptoCurrenciesState>,
    private cryptoCurrencyService: CryptoCurrencyService
  ) {}
}
