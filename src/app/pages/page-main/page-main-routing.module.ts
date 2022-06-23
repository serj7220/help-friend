import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MAIN_PAGE_ROUTES } from '../../core/constants/routers.constants';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MAIN_PAGE_ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
export class PageMainRoutingModule { }
