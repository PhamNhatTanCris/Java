import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class UserService {
  currentUser = {
    username: 'minhtan',
    isAdmin: false,
  }
  constructor(){}
}
