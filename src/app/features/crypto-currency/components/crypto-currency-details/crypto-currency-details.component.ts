import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CryptoCurrenciesState} from '../../../../store/crypto-currencies/crypto-currency-reducer';
import {CryptoCurrency} from '../../../../shared/models/CryptoCurrency';
import {FiatCurrenciesState} from '../../../../store/fiat-currencies/fiat-currency.reducer';

@Component({
  selector: 'app-crypto-currency-details',
  templateUrl: './crypto-currency-details.component.html',
  styleUrls: ['./crypto-currency-details.component.scss']
})
export class CryptoCurrencyDetailsComponent implements OnInit {
  cryptoCurrency$: Observable<CryptoCurrency>;
  selectedCryptoCurrency$: Observable<string>;
  selectedFiatCurrency$: Observable<string>;

  constructor(
    private cryptoStore: Store<CryptoCurrenciesState>,
    private fiatStore: Store<FiatCurrenciesState>
  ) {
    this.selectedCryptoCurrency$ = cryptoStore.pipe(
      select('cryptoCurrencies'),
      map((state: CryptoCurrenciesState) => state.selectedCryptoCurrencyId)
    );

    this.selectedFiatCurrency$ = fiatStore.pipe(
      select('fiatCurrencies'),
      map((state: FiatCurrenciesState) => state.selectedFiatCurrencyName)
    );
  }

  ngOnInit() {
    this.cryptoStore.select('cryptoCurrencies').subscribe((state => {
      this.cryptoCurrency$ = state.selectedCryptoCurrencyId;
    }));
  }

}
