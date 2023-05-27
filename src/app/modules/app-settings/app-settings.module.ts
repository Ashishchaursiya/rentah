import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { AppSettingsListComponent } from './app-settings-list/app-settings-list.component';


@NgModule({
  declarations: [
    AppSettingsListComponent
  ],
  imports: [
    CommonModule,
    AppSettingsRoutingModule
  ]
})
export class AppSettingsModule { }
