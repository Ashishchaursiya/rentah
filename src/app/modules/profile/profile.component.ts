import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth';
import { AuthHTTPService } from '../auth/services/auth-http/auth-http.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls:['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  adminData:any;  
  newImage:any;

  constructor(
    public matDialog:MatDialog,
    private spinner:NgxSpinnerService,
    private toast:ToastrService,
    private authHttpService:AuthHTTPService,
    private authService:AuthService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.adminData =  localStorage.getItem('authLocalStorageAdmin');
    this.adminData = JSON.parse(this.adminData);
    // console.log("Admin Data : ",this.adminData);
     //Update adminData on subject trigger also
     
     this.authService.newImageSub.subscribe(res=>{
      // console.log(res);
      if(res)
      {
        this.adminData = localStorage.getItem('authLocalStorageAdmin');
        this.adminData = JSON.parse(this.adminData);
        this.changeDetection.detectChanges();  //Updating array on HTML side only
        // console.log(this.adminData);
      }
    });
  }

  selectImage(event:any)
  {
    this.spinner.show();
    const file = event.target.files[0];
    this.newImage = file;
    console.log(this.newImage);

    const formData = new FormData();
    formData.append("newImage",this.newImage);
    this.authHttpService.uploadSingleImage(formData).subscribe((res:any)=>{
      if(res["status"])
      {
        this.newImage = res["imageUrl"];
        this.adminData.adminImage = this.newImage;

        this.authHttpService.editAdminImage(this.adminData.adminId,{adminImage:this.newImage}).subscribe((imgRes:any)=>{
          if(imgRes["status"])
          {
            this.changeDetection.detectChanges();  //Updating array on HTML side only
            localStorage.setItem('authLocalStorageAdmin', JSON.stringify(this.adminData));
            this.authService.newImageSub.next(true);

            // console.log(this.newImage);
            this.toast.info("Image uploaded successfully","",{
              timeOut:1500,
              progressBar:true,
              progressAnimation:'increasing',
              positionClass:'toast-top-right'
            });
          }
          else{
            // this.spinner.hide();
            this.toast.error(imgRes["message"]);
          }
        });
      }
      else{
        // this.spinner.hide();
        this.toast.error(res["message"]);
      }
      this.spinner.hide();
    })
  }

  editAdminDialog(adminData:any)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'edit-admin-component';
    // dialogConfig.height = "395px";
    dialogConfig.width = "850px";

    //For styling the mat-dialog (like borderRadius)
    dialogConfig.panelClass = 'custom-container1'; //Now, we have style this class in global styles.css

    //passing data
    dialogConfig.data = {adminData:adminData};

    const modalDialog = this.matDialog.open(EditAdminComponent,dialogConfig);     
  }

}
