import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from '../services/reports.service';
@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  p: any = 1;
  public allCategories: any[] = [];
  public dummyCategories: any[] = [];
  reportsList:any=[];
  searchName: string = '';

  showSearchIcon: boolean = true;

  constructor(
    public matDialog: MatDialog,
    private changeDetection: ChangeDetectorRef,
    private spinnerService: NgxSpinnerService,
    private toast: ToastrService,
    private reportService:ReportsService
    
  ) {

  }

  ngOnInit(): void {
    this.getReports()
  }

  changeStatus(status:any,cateogory:any){
    // console.log(status.value)
    const payload={newStatus:status.value}
    this.spinnerService.show()
    this.reportService.changeReportStatus(payload,cateogory._id).subscribe((data:any)=>{
      this.spinnerService.hide()
      console.log("report status has been changed successfully")
      this.toast.success("Status  has been updated successfully..")
      this.getReports()
    },(err:any)=>{
      this.spinnerService.hide()
      this.toast.error("Something went wrong..")
      console.log("report status ERROR")
    })

  }

  getReports() {
    this.spinnerService.show();
    this.reportService.readReport().subscribe((data: any) => {
      console.log(data, "reports list")
      // data.reports[0].reportStatus="CLOSED"
      this.reportsList=data?.reports;
      this.changeDetection.detectChanges();  //Updating array on HTML side only
      this.spinnerService.hide();
    }, (err: any) => {
      console.log('reports list error')
      this.spinnerService.hide();
    });
  }

  // editBannerDialog(banner: any) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.id = 'add-category-component';
  //   dialogConfig.height = "395px";
  //   dialogConfig.width = "545px";
  //   dialogConfig.panelClass = 'custom-container1';
  //   dialogConfig.data = banner;
  //   const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
  //     if (confirm) {
  //       this.getBanners()
  //     }
  //   })
  // }

  // addNewBanner() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.id = 'add-category-component';
  //   dialogConfig.height = "395px";
  //   dialogConfig.width = "545px";
  //   dialogConfig.panelClass = 'custom-container1';
  //   dialogConfig.data = {};
  //   const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
  //     if (confirm) {
  //       this.getBanners()
  //     }
  //   })
  // }

  // deleteBannerDialog(bannerId: string) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.id = 'del-category-component';
  //   dialogConfig.height = "190px";
  //   dialogConfig.width = "510px";
  //   dialogConfig.panelClass = 'custom-container';
  //   dialogConfig.data = { bannerId: bannerId };
  //   const modalDialog = this.matDialog.open(BannerDeleteComponent, dialogConfig).afterClosed().subscribe(confirm => {
  //     if (confirm) {
  //       this.getBanners()
  //     }
  //   })
  // }


}
