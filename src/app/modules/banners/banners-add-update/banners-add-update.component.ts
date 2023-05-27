import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthHTTPService } from 'src/app/modules/auth/services/auth-http/auth-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-banners-add-update',
  templateUrl: './banners-add-update.component.html',
  styleUrls: ['./banners-add-update.component.scss']
})
export class BannersAddUpdateComponent implements OnInit {

  newImage: any;
  mode: string = '';
  form: FormGroup
  imageArray: any = []

  constructor(
    private bannerService: BannerService,
    private authHttpService: AuthHTTPService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<BannersAddUpdateComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    console.log(this.data, 'DATA///')
    if (this.data && Object.keys(this.data).length === 0 && Object.getPrototypeOf(this.data) === Object.prototype) this.mode = 'create';
    else this.mode = 'update';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      bannerName: ['' || this.data.bannerName, Validators.required],
      bannerImage: [''],
      bannerURL: ['' || this.data.bannerURL, Validators.required]
    })
    if (this.data?.bannerImage) this.imageArray.push(this.data?.bannerImage)
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
    if (this.mode === 'create') this.addBanner()
    else this.editBanner()
  }

  addBanner() {
    this.spinner.show()
    this.form.value.bannerImage = this.newImage;
    console.log(this.form.value, 'ADD Banner');
    this.bannerService.createBanner(this.form.value).subscribe((data: any) => {
      console.log(data, "add banner data")
      this.spinner.hide()
      this.toast.success("Banner added successfully..")
      this.dialogRef.close(true)
    }, (err: any) => {
      this.spinner.hide()
      this.toast.error("Something went wrong...")
      console.log('add banner error');
    });
  }

  editBanner() {
    this.spinner.show()
    this.form.value.bannerImage = this.newImage ? this.newImage : this.data?.bannerImage
    // this.form.value.categoryIcon = this.newImage;
    this.bannerService.updateBanner(this.form.value, this.data._id).subscribe((data: any) => {
      console.log(data, "update banner data")
      this.spinner.hide()
      this.toast.success("Banner updated successfully..")
      this.dialogRef.close(true)
    }, (err: any) => {
      this.spinner.hide()
      this.toast.error("Something went wrong...")
      console.log('updat banner error');
    });
  }

}
