import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        component: ArticlesListComponent,
      },
      {
        path: ':slug',
        component: ArticlesDetailComponent,
      }
    ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
