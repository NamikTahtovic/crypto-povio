import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './shared/components/settings/settings.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'currency' },
  { path: 'currency', loadChildren: './features/crypto-currency/crypto-currency.module#CryptoCurrencyModule' },
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
