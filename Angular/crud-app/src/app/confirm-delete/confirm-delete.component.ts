import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteComponent>) {}

}
