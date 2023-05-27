import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
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

  ngOnInit(): void {
  }

  goBackToAppUsers() {
    this.router.navigate(['users/users-list'])
  }

}
