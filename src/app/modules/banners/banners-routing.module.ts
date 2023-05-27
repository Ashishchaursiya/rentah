import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersListComponent } from './banners-list/banners-list.component';

const routes: Routes = [
  { path: 'banners-list', component: BannersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannersRoutingModule { }
