import { NgModule } from '@angular/core';
import { NgxPaginationModule} from 'ngx-pagination';

import { PageMainComponent } from './page-main.component';
import { SharedModule } from '../../shared/shared.module';
import { PageMainRoutingModule } from './page-main-routing.module';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [PageMainComponent, UserCardComponent],
  imports: [SharedModule, PageMainRoutingModule, NgxPaginationModule],
  exports: [PageMainComponent, UserCardComponent]
})
export class PageMainModule { }
