import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMgmtListComponent } from './category-mgmt-list/category-mgmt-list.component';

const routes: Routes = [
  {path:'category-management-list',component:CategoryMgmtListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryManagementRoutingModule { }
