import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CryptoCurrency} from '../../../shared/models/CryptoCurrency';
import { Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {FiatCurrenciesState} from '../../../store/fiat-currencies/fiat-currency.reducer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrencyService {

  selectedFiatCurrency$: Observable<string>;

  fiatCurrency: string;
  baseUrl = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'X-CMC_PRO_API_KEY': '44e31373-74c7-4bb9-96b8-84e56a8a6c2b',
      'Content-Type':  'application/json',
    })
  };


  constructor(private http: HttpClient,
              private cryptoStore: Store<FiatCurrenciesState>) {
    this.selectedFiatCurrency$ = cryptoStore.pipe(
      select('fiatCurrencies'),
      map((state: FiatCurrenciesState) => state.selectedFiatCurrencyName)
    );
  }

  getCryptocurrencies(): Observable<CryptoCurrency[]> {
    this.selectedFiatCurrency$.subscribe(data => {
      this.fiatCurrency = data;
    });
    return this.http.get<CryptoCurrency[]>(`${this.baseUrl}` + '/listings/latest?start=1&limit=100&convert=' + this.fiatCurrency, this.httpOptions);

  }
}
