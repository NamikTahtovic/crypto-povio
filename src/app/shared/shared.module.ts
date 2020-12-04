import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import {StoreModule} from '@ngrx/store';



@NgModule({
  declarations: [HeaderComponent, SettingsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    StoreModule
  ],
  exports: [
    HeaderComponent,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
