import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersRoutingModule } from './banners-routing.module';
import { BannersListComponent } from './banners-list/banners-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BannersAddUpdateComponent } from './banners-add-update/banners-add-update.component';
import { BannerDeleteComponent } from './banner-delete/banner-delete.component';


@NgModule({
  declarations: [
    BannersListComponent,
    BannersAddUpdateComponent,
    BannerDeleteComponent
  ],
  imports: [
    CommonModule,
    BannersRoutingModule,
   
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,
    NgxPaginationModule,
    InlineSVGModule
  ]
})
export class BannersModule { }
