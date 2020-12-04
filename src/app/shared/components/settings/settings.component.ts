import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {FiatCurrenciesState} from '../../../store/fiat-currencies/fiat-currency.reducer';
import {Observable} from 'rxjs';
import {FiatCurrency} from '../../models/FiatCurrency';
import {FiatCurrenciesLoaded, SelectFiatCurrency} from '../../../store/fiat-currencies/fiat-currency.actions';
import {selectAllFiatCurrencies} from '../../../store';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  fiatCurrencies$: Observable<FiatCurrency[]>;
  selectedFiatCurrency$: Observable<string>;

  initialFiatCurrencies = [
    {id: 1, name: 'USD'},
    {id: 2, name: 'EUR'},
    {id: 3, name: 'CNY'}
  ];


  constructor(private store: Store<FiatCurrenciesState>) {
    this.fiatCurrencies$ = store.pipe(select(selectAllFiatCurrencies));
    this.selectedFiatCurrency$ = store.pipe(
      select('fiatCurrencies'),
      map((state: FiatCurrenciesState) => state.selectedFiatCurrencyName)
    );
  }

  ngOnInit() {
    this.getFiatCurrencies();
  }

  selectCurrency(currency) {
    this.store.dispatch(new SelectFiatCurrency(currency));
  }

  getFiatCurrencies() {
    this.store.dispatch(new FiatCurrenciesLoaded(this.initialFiatCurrencies));
  }

}
