import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'src/app/modules/reports/services/reports.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData:any={}

  constructor(
    private reportService:ReportsService,
    private spinner:NgxSpinnerService,
    private toastr:ToastrService,
    private changeDetection: ChangeDetectorRef,
    ) { }

  ngOnInit(): void {
    this.getDashboardData()
  }

  getDashboardData(){
    this.spinner.show()
    this.reportService.getDashboardData_().subscribe((data:any)=>{
      this.spinner.hide()
      this.dashboardData=data;
      this.changeDetection.detectChanges();
      // this.toastr.success("")
      console.log(data,"dashboard data")
    },(err:any)=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong while fetching dashboard data...")
      console.log(err,"dashboard data error")
    })

  }

}
