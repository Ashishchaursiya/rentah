import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('../modules/notifications/notifications.module').then((m) => m.NotificationsModule),
  },
  {
    path: 'category-management',
    loadChildren: () =>
      import('../modules/category-management/category-management.module').then((m) => m.CategoryManagementModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('../modules/reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'banners',
    loadChildren: () =>
      import('../modules/banners/banners.module').then((m) => m.BannersModule),
  },
  {
    path: 'app-settings',
    loadChildren: () =>
      import('../modules/app-settings/app-settings.module').then((m) => m.AppSettingsModule),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('../modules/notification/notification.module').then((m) => m.NotificationModule),
  },
  // {
  //   path: 'urvu',
  //   loadChildren: () =>
  //     import('../modules/uruv-users/uruv-users.module').then((m) => m.UruvUsersModule),
  // },
  // {
  //   path: 'urvu',
  //   loadChildren: () =>
  //     import('../modules/topics/topics.module').then((m) => m.TopicsModule),
  // },
  // {
  //   path: 'urvu',
  //   loadChildren: () =>
  //     import('../modules/plans/plans.module').then((m) => m.PlansModule),
  // },
  // {
  //   path: 'urvu',
  //   loadChildren: () =>
  //     import('../modules/create-coupon/create-coupon.module').then((m) => m.CreateCouponModule),
  // },
  // {
  //   path: 'urvu',
  //   loadChildren: () =>
  //     import('../modules/support-request/support-request.module').then((m) => m.SupportRequestModule),
  // },
  // {
  //   path: 'urvu',
  //   loadChildren: () =>
  //     import('../modules/app-settings/app-settings.module').then((m) => m.AppSettingsModule),
  // },
  {
    path: '',
    redirectTo: '/dashboard/dashboard-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
