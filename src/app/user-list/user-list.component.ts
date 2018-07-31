import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns = ['email', 'name', 'type', 'company', 'country', 'subscription'];
  temp: Date = new Date();
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}
