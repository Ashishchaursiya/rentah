import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-user-details',
  templateUrl: './business-user-details.component.html',
  styleUrls: ['./business-user-details.component.scss']
})
export class BusinessUserDetailsComponent implements OnInit {
  message: any;
  constructor(
    private router: Router
  ) {
    let navigation: any = this.router.getCurrentNavigation();
    if (navigation.extras.state) {
      this.message = navigation?.extras?.state?.message;
    }
    else {
      this.router.navigate(['users/users-list']);
      return;
    }
  }

  goBackToUsers(){
    this.router.navigate(['users/users-list'])
  }

  ngOnInit(): void {
  }

}
