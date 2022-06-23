import { Routes } from '@angular/router';

import { PageMainComponent } from '../../pages/page-main/page-main.component';
import { PageUserDetailsComponent } from '../../pages/page-user-details/page-user-details.component';

export const MAIN_PAGE_ROUTES: Routes = [
  {
    path: '',
    component: PageMainComponent
  }
];

export const USER_DETAILS_ROUTES: Routes = [
  {
    path: '',
    component: PageUserDetailsComponent
  }
];
