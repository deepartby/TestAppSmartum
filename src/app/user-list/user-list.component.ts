import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { User} from '../models/user';
import { MatDialog } from '@angular/material';
import { UserEditorComponent } from '../user-editor/user-editor.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns = ['email', 'name', 'type', 'company', 'country', 'subscription'];
  savedUser: User;
  constructor(private userService: UserService,
              public dialog: MatDialog) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
  openDialog(user: any): void {
    const dialogRef = this.dialog.open(UserEditorComponent, { data: user });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.saveUser(user).subscribe(res =>
          this.savedUser = res);
      }
    });
  }
}
