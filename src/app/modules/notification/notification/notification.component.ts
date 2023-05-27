import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../../auth/services/api-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  form: FormGroup
  constructor(private formBuilder: FormBuilder,private apiService:ApiServiceService,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      title:['',Validators.required],
      message:['',Validators.required]
    })
  }

  save(){
    this.spinner.show()
    this.apiService.sendNotificationToAllUsers(this.form.value).subscribe((data:any)=>{
          this.spinner.hide()
          this.toastr.success("Notifications sent successfully..")
          console.log(data,"notifications success")
    },(err:any)=>{
         this.spinner.hide()
         this.toastr.error("Something went wrong..")
         console.log(err,"notifications error ")
    })

    // alert(JSON.stringify(this.form.value))

  }

}
