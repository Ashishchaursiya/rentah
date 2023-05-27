import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth';
import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {

  toolbarButtonMarginClass = 'ms-1 ms-lg-3';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';

  adminData:any;

  constructor(
    private layout: LayoutService,
    private authService:AuthService,
    private changeDetection: ChangeDetectorRef
    ) {
    this.adminData = localStorage.getItem('authLocalStorageAdmin');
    this.adminData = JSON.parse(this.adminData);
  }

  ngOnInit(): void {
    this.headerLeft = this.layout.getProp('header.left') as string;

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
}
