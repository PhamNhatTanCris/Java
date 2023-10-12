import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from './core/core.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'date',
    'gender',
    'education',
    'company',
    'experience',
    'salary',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dialogRef:any = MatDialogRef<ConfirmDeleteComponent>;
  constructor(
    private _dialog: MatDialog,
    private _empSerice: EmployeeService,
    private _coreService: CoreService,
  ){}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openEmpAddEdit(enterAnimationDuration: string, exitAnimationDuration: string): void{
    const dialogRef1 = this._dialog.open(EmpAddEditComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef1.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList(){
    this._empSerice.getEployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number){
    this._empSerice.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar("Xóa thành công", "Done")
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openConfirmDelete(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void{
    this.dialogRef = this._dialog.open(ConfirmDeleteComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if(result) {
        this.deleteEmployee(id)
      }
      this.dialogRef = null;
    });
  }

  openEditForm(data: any){
    const dialogRef2 = this._dialog.open(EmpAddEditComponent, {
      data,
    });
    dialogRef2.afterClosed().subscribe({
      next: (val) => {
        this.getEmployeeList();
      }
    })
  }
}
