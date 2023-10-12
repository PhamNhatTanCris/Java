import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable, timer, map, startWith, finalize, takeWhile } from 'rxjs';
import { User } from './user';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit{

  userIdChangeAfterFiveSeconds = '14324';

  users: User[] = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];

  newUser: User;

  constructor() {
    this.newUser = new User();
  }
  ngOnInit(): void {
  }
  time$: Observable<number> = timer(0, 1000).pipe(
    map((val) => 5 - (val + 1)),
    startWith(5),
    finalize(() => {
      this.userIdChangeAfterFiveSeconds = '';
    }),
    takeWhile((val) => val >= 0)
  );

  addUser() {
    this.users.push(this.newUser);
    this.newUser = new User();
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser];
    this.newUser = new User();
  }
}
