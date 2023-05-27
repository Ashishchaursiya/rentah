import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSettingsListComponent } from './app-settings-list/app-settings-list.component';

const routes: Routes = [
  {path:'app-settings-list',component:AppSettingsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingsRoutingModule { }
