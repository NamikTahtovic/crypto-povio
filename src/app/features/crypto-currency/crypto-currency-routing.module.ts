import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CryptoCurrencyComponent} from './components/crypto-currency/crypto-currency.component';
import {CryptoCurrencyDetailsComponent} from './components/crypto-currency-details/crypto-currency-details.component';
import {CryptoCurrencyLayoutComponent} from './layout/crypto-currency-layout/crypto-currency-layout.component';


const routes: Routes = [
  { path: '',
    component: CryptoCurrencyLayoutComponent,
    children: [
      {
        path: '',
        component: CryptoCurrencyComponent,
      },
      {
        path: 'details/:id',
        component: CryptoCurrencyDetailsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCurrencyRoutingModule { }
