import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { HomeComponent } from './home/home.component';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    HeaderComponent,
    NotesListComponent,
    NoteDetailComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
