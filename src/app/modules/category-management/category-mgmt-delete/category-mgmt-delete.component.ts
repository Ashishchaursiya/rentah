import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryManagementService } from '../services/category-management.service';
@Component({
  selector: 'app-category-mgmt-delete',
  templateUrl: './category-mgmt-delete.component.html',
  styleUrls: ['./category-mgmt-delete.component.scss']
})
export class CategoryMgmtDeleteComponent implements OnInit {

  categoryManagementId;

  constructor(
    private toast: ToastrService,
    public dialogRef: MatDialogRef<CategoryMgmtDeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private spinner: NgxSpinnerService,
    private categoryManagementService: CategoryManagementService
  ) {
    this.categoryManagementId = data.categoryManagementId;
  }

  ngOnInit(): void {
  }

  closeModel() {
    this.dialogRef.close(false);

  }

  deleteCategoryManagement() {
    this.spinner.show()
    this.categoryManagementService.deleteCategoryManagement(this.categoryManagementId).subscribe((data: any) => {
      console.log(data, 'delete Category Manangement data')
      this.spinner.hide()
      this.toast.success("Category Manangement deleted successfully...")
      this.dialogRef.close(true)
    }, (err: any) => {
      console.log(err, 'delete Category Manangement error')
      this.spinner.hide()
      this.toast.error("Something went wrong..")
    });
  }

}
