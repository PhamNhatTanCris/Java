import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent {
  constructor(public toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showError() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showInfo() {
    this.toastr.info('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showWarning() {
    this.toastr.warning('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
}

