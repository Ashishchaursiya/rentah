import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthHTTPService } from 'src/app/modules/auth/services/auth-http/auth-http.service';
import { AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  adminData:any;
  showPassword: boolean;

  constructor(
    private authHttpService:AuthHTTPService,
    private authService:AuthService,
    private toast:ToastrService,
    public dialogRef:MatDialogRef<EditAdminComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    )
  {
    this.adminData = data.adminData;
    console.log(this.adminData);
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    this.authHttpService.editAdminDetails(this.adminData.adminId,form.value).subscribe((res:any)=>{
      console.log("Result : ",res)
      if(res["status"])
      {
        localStorage.setItem('authLocalStorageAdmin', JSON.stringify(this.adminData));
        this.authService.newImageSub.next(true);

        this.toast.success("Admin Details Updated","Success",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        });
        this.closeModel();
      }
      else
      {
        this.toast.error("Details not updated....error occured("+res["message"]+")","Error",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
      }
    });
  }

  password()
  {
    this.showPassword = !this.showPassword;
  }

  closeModel()
  {
    this.dialogRef.close();
    // this.authService.filter("Deleted");
  }

}
