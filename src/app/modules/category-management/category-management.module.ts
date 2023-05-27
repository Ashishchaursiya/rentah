import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryManagementRoutingModule } from './category-management-routing.module';
import { CategoryMgmtListComponent } from './category-mgmt-list/category-mgmt-list.component';
import { CategoryMgmtAddUpdateComponent } from './category-mgmt-add-update/category-mgmt-add-update.component';
import { CategoryMgmtDeleteComponent } from './category-mgmt-delete/category-mgmt-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    CategoryMgmtListComponent,
    CategoryMgmtAddUpdateComponent,
    CategoryMgmtDeleteComponent
  ],
  imports: [
    CommonModule,
    CategoryManagementRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgxPaginationModule,
    InlineSVGModule

  ]
})
export class CategoryManagementModule { }
