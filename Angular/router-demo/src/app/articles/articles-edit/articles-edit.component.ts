import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CheckDeactivate } from 'src/app/check-deactivate';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit, CheckDeactivate{
  isEditing = false;
  slug$ = this.activatedRoute.paramMap.pipe(
    map(params => params.get('slug'))
  );

  constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog){}

  openDialog() {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Do you want to leave this page?'
      }
    });
    return ref.afterClosed();
  }


  checkDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return !this.isEditing || this.openDialog();
  }
  ngOnInit(): void {

  }


}
