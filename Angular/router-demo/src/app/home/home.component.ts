import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuHidden: boolean = true; // Ban đầu, thanh menu được ẩn

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
