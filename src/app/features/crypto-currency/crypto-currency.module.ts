import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CryptoCurrencyComponent} from './components/crypto-currency/crypto-currency.component';
import {CryptoCurrencyDetailsComponent} from './components/crypto-currency-details/crypto-currency-details.component';
import {SharedModule} from '../../shared/shared.module';
import {CryptoCurrencyRoutingModule} from './crypto-currency-routing.module';
import {CryptoCurrencyLayoutComponent} from './layout/crypto-currency-layout/crypto-currency-layout.component';
import {StoreModule} from '@ngrx/store';



@NgModule({
  declarations: [ CryptoCurrencyLayoutComponent, CryptoCurrencyComponent, CryptoCurrencyDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CryptoCurrencyRoutingModule,
    StoreModule
  ]
})
export class CryptoCurrencyModule { }
