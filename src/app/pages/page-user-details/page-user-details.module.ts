import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PageUserDetailsComponent } from './page-user-details.component';
import { PageUserDetailsRoutingModule } from './page-user-details-routing.module';

@NgModule({
  declarations: [PageUserDetailsComponent],
  imports: [SharedModule, PageUserDetailsRoutingModule],
  exports: [PageUserDetailsComponent]
})
export class PageUserDetailsModule { }
