import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AddNewBusinessUserComponent } from './add-new-business-user/add-new-business-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BusinessUserDetailsComponent } from './business-user-details/business-user-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    UsersListComponent,
    AddNewBusinessUserComponent,
    UserDetailsComponent,
    BusinessUserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,
    NgxPaginationModule,
    InlineSVGModule,
    MatIconModule,
    MatButtonModule
    
  ]
})
export class UsersModule { }
