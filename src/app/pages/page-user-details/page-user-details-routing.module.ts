import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { USER_DETAILS_ROUTES } from '../../core/constants/routers.constants';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(USER_DETAILS_ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
export class PageUserDetailsRoutingModule { }
