import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessUserDetailsComponent } from './business-user-details/business-user-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'users-list',component:UsersListComponent},
  {path:'users-details',component:UserDetailsComponent},
  {path:'business-users-details',component:BusinessUserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
