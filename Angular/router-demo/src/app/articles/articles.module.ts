import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';



@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesDetailComponent,
    ArticlesComponent,
    ArticlesEditComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
  ]
})
export class ArticlesModule { }
