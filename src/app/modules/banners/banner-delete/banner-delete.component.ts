import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BannerService } from '../services/banner.service';
@Component({
  selector: 'app-banner-delete',
  templateUrl: './banner-delete.component.html',
  styleUrls: ['./banner-delete.component.scss']
})
export class BannerDeleteComponent implements OnInit {

  bannerId;

  constructor(
    private toast: ToastrService,
    public dialogRef: MatDialogRef<BannerDeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private bannerService: BannerService,
    private spinner: NgxSpinnerService
  ) {
    this.bannerId = data.bannerId;
  }

  ngOnInit(): void {
  }

  closeModel() {
    this.dialogRef.close(false);

  }

  deleteBanner() {
    this.spinner.show()
    this.bannerService.deleteBanner(this.bannerId).subscribe((data: any) => {
      console.log(data, 'delete banner data')
      this.spinner.hide()
      this.toast.success("Banner deleted successfully...")
      this.dialogRef.close(true)
    }, (err: any) => {
      console.log(err, 'delete banner error')
      this.spinner.hide()
      this.toast.error("Something went wrong..")
    });
  }

}
