import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HomeComponent } from './home/home.component';
import { ChildHomeComponent } from './home/child-home/child-home.component';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from './toastr/toastr.component';

const routes: Routes = [
  // {
  //   path: 'article',
  //   component: ArticleDetailComponent,
  // },
  // {
  //   path: 'article/:slug',
  //   component: ArticleListComponent,
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path: '',
    component: ToastrComponent,
  }
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'child',
  //       component: ChildHomeComponent,
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
