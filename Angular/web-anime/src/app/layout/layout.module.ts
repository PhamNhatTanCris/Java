import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
