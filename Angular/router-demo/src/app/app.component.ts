import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-demo';
  constructor(public userService: UserService) {}

  toggleRole() {
    this.userService.currentUser.isAdmin = !this.userService.currentUser.isAdmin;
  }
}
