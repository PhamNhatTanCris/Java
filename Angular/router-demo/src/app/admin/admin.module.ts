import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminArticlesListComponent } from './admin-articles-list/admin-articles-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminArticlesListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
