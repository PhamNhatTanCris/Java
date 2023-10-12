import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CanLoadAdminGuard } from './can-load-admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canLoad: [CanLoadAdminGuard]
  },
  {
    path: '',
    redirectTo: 'chips',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
