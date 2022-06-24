import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/page-main/page-main.module').then((m) => m.PageMainModule),
    pathMatch: 'full'
  },
  {
    path: 'user-details/:id',
    loadChildren: () =>
      import('./pages/page-user-details/page-user-details.module').then((m) => m.PageUserDetailsModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
