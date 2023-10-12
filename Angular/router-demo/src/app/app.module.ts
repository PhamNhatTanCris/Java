import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesModule } from './articles/articles.module';
import { AdminComponent } from './admin/admin.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from './user.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableCedComponent } from './table-ced/table-ced.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { PostComponent } from './post/post.component';
import { appPipes } from './crud/pipes.pipe';
import { IsAdultPipe } from './crud/adult';
import { ChipsComponent } from './chips/chips.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    TableComponent,
    TableCedComponent,
    CrudComponent,
    PostComponent,
    appPipes,
    IsAdultPipe,
    ChipsComponent
    //ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
