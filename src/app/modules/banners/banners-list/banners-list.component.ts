import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BannerDeleteComponent } from '../banner-delete/banner-delete.component';
import { BannersAddUpdateComponent } from '../banners-add-update/banners-add-update.component';
import { BannerService } from '../services/banner.service';
// import { ProductService } from 'src/app/modules/products/services/product.service';
// import { CategoryService } from '../../services/category.service';
// import { AddCategoryComponent } from '../add-category/add-category.component';
// import { DelCategoryComponent } from '../del-category/del-category.component';

@Component({
  selector: 'app-banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.scss']
})
export class BannersListComponent implements OnInit {

  p: any = 1;
  public allCategories: any[] = [];
  public dummyCategories: any[] = [];
  searchName: string = '';

  showSearchIcon: boolean = true;

  constructor(
    public matDialog: MatDialog,
    private changeDetection: ChangeDetectorRef,
    private spinnerService: NgxSpinnerService,
    private toast: ToastrService,
    private bannerService: BannerService
  ) {

  }

  ngOnInit(): void {
    this.getBanners()
  }

  getBanners() {
    this.spinnerService.show();
    this.bannerService.readBanners().subscribe((data: any) => {
      console.log(data, "banners list")
      this.allCategories=data.banners
      this.changeDetection.detectChanges();  //Updating array on HTML side only
      this.spinnerService.hide();
    }, (err: any) => {
      console.log('banners list error')
      this.spinnerService.hide();
    });
  }

  editBannerDialog(banner: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'add-category-component';
    dialogConfig.height = "395px";
    dialogConfig.width = "545px";
    dialogConfig.panelClass = 'custom-container1';
    dialogConfig.data = banner;
    const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.getBanners()
      }
    })
  }

  addNewBanner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'add-category-component';
    dialogConfig.height = "395px";
    dialogConfig.width = "545px";
    dialogConfig.panelClass = 'custom-container1';
    dialogConfig.data = {};
    const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.getBanners()
      }
    })
  }

  deleteBannerDialog(bannerId: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'del-category-component';
    dialogConfig.height = "190px";
    dialogConfig.width = "510px";
    dialogConfig.panelClass = 'custom-container';
    dialogConfig.data = { bannerId: bannerId };
    const modalDialog = this.matDialog.open(BannerDeleteComponent, dialogConfig).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.getBanners()
      }
    })
  }


}
