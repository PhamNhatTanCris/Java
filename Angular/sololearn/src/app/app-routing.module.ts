import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {

  //   path: '', component: NotesListComponent

  // },
  // {

  //   path: 'new', component: AddNoteComponent

  // },
  // {

  //   path: 'note/:id', component: NoteDetailComponent,

  // },
  // {

  //   path: 'articles', loadChildren: () => import('./articles/articles-list/articles-list.component').then((m) => m.ArticlesListComponent)

  // },
  // {

  //   path: "new", loadChildren: () => import('./add-note/add-note.component').then((m) => m.AddNoteComponent)

  // },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
