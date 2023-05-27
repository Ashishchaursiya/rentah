import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthHTTPService } from 'src/app/modules/auth/services/auth-http/auth-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryManagementService } from '../services/category-management.service';
@Component({
  selector: 'app-category-mgmt-add-update',
  templateUrl: './category-mgmt-add-update.component.html',
  styleUrls: ['./category-mgmt-add-update.component.scss']
})
export class CategoryMgmtAddUpdateComponent implements OnInit {

  newImage: any;
  mode: string = '';
  form: FormGroup
  imageArray: any = []

  constructor(
    private authHttpService: AuthHTTPService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<CategoryMgmtAddUpdateComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private categoryMgmtService: CategoryManagementService
  ) {
    console.log(this.data, 'DATA///')
    if (this.data && Object.keys(this.data).length === 0 && Object.getPrototypeOf(this.data) === Object.prototype) this.mode = 'create';
    else this.mode = 'update';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // categoryId: ['', Validators.required],
      categoryImage: [''],
      categoryName: ['' || this.data.categoryName, Validators.required]
    })
    if (this.data?.categoryImage) this.imageArray.push(this.data?.categoryImage)
  }

  removeImage(event: MouseEvent, inpp: any) {
    event.preventDefault();
    this.imageArray.pop();
    inpp.value = '';
    // this.form.value.topicImg=inpp.value;
  }


  selectImage(event: any) {
    this.spinner.show();
    const file = event.target.files[0];
    this.newImage = file;
    // console.log(this.newImage);

    const formData = new FormData();
    formData.append("newImage", this.newImage);
    this.authHttpService.uploadSingleImage(formData).subscribe((res: any) => {
      if (res["status"]) {
        this.newImage = res["imageUrl"];
        // console.log(this.newImage);
        this.toast.info("Image uploaded successfully");
        this.imageArray.pop()
        this.imageArray.push(this.newImage)
      }
      else {
        // this.spinner.hide();
        this.toast.error(res["message"]);
      }
      this.spinner.hide();
    })
  }

  save() {
    if (this.mode === 'create') this.addCategoryManagement()
    else this.editCategoryManagement()
  }

  addCategoryManagement() {
    this.spinner.show()
    this.form.value.categoryImage = this.newImage;
    console.log(this.form.value, 'ADD category management');
    this.categoryMgmtService.createCategoryManagement(this.form.value).subscribe((data: any) => {
      console.log(data, "add category management data")
      this.spinner.hide()
      this.toast.success("category management added successfully..")
      this.dialogRef.close(true)
    }, (err: any) => {
      this.spinner.hide()
      this.toast.error("Something went wrong...")
      console.log('add category management error');
    });
  }

  editCategoryManagement() {
    this.spinner.show()
    // this.form.value.categoryIcon = this.newImage;
    this.form.value.categoryImage = this.newImage ? this.newImage : this.data?.categoryImage
    this.categoryMgmtService.updateCategoryManagement(this.form.value, this.data._id).subscribe((data: any) => {
      console.log(data, "update category management data")
      this.spinner.hide()
      this.toast.success("category management updated successfully..")
      this.dialogRef.close(true)
    }, (err: any) => {
      this.spinner.hide()
      this.toast.error("Something went wrong...")
      console.log('updat category management error');
    });
  }


}
