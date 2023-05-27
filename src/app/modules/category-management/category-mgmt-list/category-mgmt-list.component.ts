import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryMgmtAddUpdateComponent } from '../category-mgmt-add-update/category-mgmt-add-update.component';
import { CategoryMgmtDeleteComponent } from '../category-mgmt-delete/category-mgmt-delete.component';
import { CategoryManagementService } from '../services/category-management.service';

@Component({
  selector: 'app-category-mgmt-list',
  templateUrl: './category-mgmt-list.component.html',
  styleUrls: ['./category-mgmt-list.component.scss']
})
export class CategoryMgmtListComponent implements OnInit {

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
    private categoryMgmtService: CategoryManagementService
  ) {

  }

  ngOnInit(): void {
    this.getCategoryManagement()
  }

  getCategoryManagement() {
    this.spinnerService.show();
    this.categoryMgmtService.readCategoryManagement().subscribe((data: any) => {
      console.log(data, "category management list")
      this.allCategories=data.data
      this.changeDetection.detectChanges();  //Updating array on HTML side only
      this.spinnerService.hide();
    }, (err: any) => {
      console.log('category management list error')
      this.spinnerService.hide();
    });
  }

  editCategoryManagementDialog(categoryManagement: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'add-category-component';
    dialogConfig.height = "395px";
    dialogConfig.width = "545px";
    dialogConfig.panelClass = 'custom-container1';
    dialogConfig.data = categoryManagement;
    const modalDialog = this.matDialog.open(CategoryMgmtAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.getCategoryManagement()
      }
    })
  }

  addCategoryManagement() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'add-category-component';
    dialogConfig.height = "395px";
    dialogConfig.width = "545px";
    dialogConfig.panelClass = 'custom-container1';
    dialogConfig.data = {};
    const modalDialog = this.matDialog.open(CategoryMgmtAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.getCategoryManagement()
      }
    })
  }

  deleteCategoryManagementDialog(categoryManagementId: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'del-category-component';
    dialogConfig.height = "190px";
    dialogConfig.width = "510px";
    dialogConfig.panelClass = 'custom-container';
    dialogConfig.data = { categoryManagementId: categoryManagementId };
    const modalDialog = this.matDialog.open(CategoryMgmtDeleteComponent, dialogConfig).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.getCategoryManagement()
      }
    })
  }


}
