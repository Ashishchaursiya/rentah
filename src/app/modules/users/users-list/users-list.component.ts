import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddNewBusinessUserComponent } from '../add-new-business-user/add-new-business-user.component';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  p: any = 1;
  // public allCategories: any[] = [];
  public allCategories: any[] = [
    {}
  ];
  public dummyCategories: any[] = [];
  searchName: string = '';
  showSearchIcon: boolean = true;
  constructor(
    public matDialog: MatDialog,
    private changeDetection: ChangeDetectorRef,
    private spinnerService: NgxSpinnerService,
    private toast: ToastrService,
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    // this.getUsers()
  }

  getUsers() {
    this.spinnerService.show();
    this.userService.readUsers().subscribe((data: any) => {
      console.log(data, "users list")
      this.changeDetection.detectChanges();  //Updating array on HTML side only
      this.spinnerService.hide();
    }, (err: any) => {
      console.log('users list error')
      this.spinnerService.hide();
    });
  }

  editUserDialog(user: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'add-category-component';
    dialogConfig.height = "395px";
    dialogConfig.width = "545px";
    dialogConfig.panelClass = 'custom-container1';
    dialogConfig.data = user;
    // const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
    //   if (confirm) {
    //     this.getUsers()
    //   }
    // })
  }

  addUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'add-category-component';
    dialogConfig.height = "395px";
    dialogConfig.width = "545px";
    dialogConfig.panelClass = 'custom-container1';
    dialogConfig.data = {};
    // const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
    //   if (confirm) {
    //     this.getUsers()
    //   }
    // })
  }

  deleteUserDialog(bannerId: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'del-category-component';
    dialogConfig.height = "190px";
    dialogConfig.width = "510px";
    dialogConfig.panelClass = 'custom-container';
    dialogConfig.data = { bannerId: bannerId };
    // const modalDialog = this.matDialog.open(BannerDeleteComponent, dialogConfig).afterClosed().subscribe(confirm => {
    //   if (confirm) {
    //     this.getUsers()
    //   }
    // })
  }

  ViewDetails_AppUsers(category: any) {
    this.router.navigate(['users/users-details'], { state: { message: category } })

  }

  ViewDetails_BusinessUsers(category: any) {
    // alert("hii")
    this.router.navigate(['users/business-users-details'], { state: { message: category } })

  }

  addNewBusinessUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'add-category-component';
    dialogConfig.maxHeight = "80vh";
    dialogConfig.maxWidth = "80vw";
    dialogConfig.width = "80%";
    dialogConfig.height = "80%";
    dialogConfig.panelClass = 'full-screen-modal';
    dialogConfig.data = {};
    const modalDialog = this.matDialog.open(AddNewBusinessUserComponent, dialogConfig).afterClosed().subscribe(confirm => {
      if (confirm) {
        // this.getUsers()
      }
    })

  }


}
