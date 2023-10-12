import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'mailboxx',
    loadChildren: () => import('mailboxx/MailboxxModule').then(m => m.MailboxxModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('calendar/CalendarModule').then(m => m.CalendarModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
