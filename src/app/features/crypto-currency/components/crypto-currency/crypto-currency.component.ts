import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectAllCryptoCurrencies} from '../../../../store';
import {CryptoCurrency} from '../../../../shared/models/CryptoCurrency';
import {CryptoCurrenciesState} from '../../../../store/crypto-currencies/crypto-currency-reducer';
import {LoadCryptoCurrencies, SelectCryptoCurrency} from '../../../../store/crypto-currencies/crypto-currency.actions';
import {FiatCurrenciesState} from '../../../../store/fiat-currencies/fiat-currency.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'day-change'];

  cryptoCurrencies$: Observable<CryptoCurrency[]>;
  selectedFiatCurrency$: Observable<string>;

  constructor(
    private cryptoStore: Store<CryptoCurrenciesState>,
    private fiatStore: Store<FiatCurrenciesState>
  ) {

    this.selectedFiatCurrency$ = fiatStore.pipe(
      select('fiatCurrencies'),
      map((state: FiatCurrenciesState) => state.selectedFiatCurrencyName)
    );
  }

  ngOnInit() {
    this.getCryptoCurrencies();
  }

  selectCurrency(currency) {
    this.cryptoStore.dispatch(new SelectCryptoCurrency(currency));
  }

  // test load cryptos from API
  getCryptoCurrencies() {
    this.cryptoCurrencies$ = this.cryptoStore.pipe(select(selectAllCryptoCurrencies));
    this.cryptoStore.dispatch(new LoadCryptoCurrencies());
  }
}
