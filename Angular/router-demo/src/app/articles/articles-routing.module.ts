import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { CanEditArticlesGuard } from './can-edit-articles-guard.guard';
import { CanLeaveArticlesGuard } from './can-leave-articles-guard.guard';

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
      },
      {
        path: ':slug/edit',
        component: ArticlesEditComponent,
        canActivate: [CanEditArticlesGuard],
        canDeactivate: [CanLeaveArticlesGuard]
      }
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
