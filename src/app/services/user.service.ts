import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';
import { USERS } from '../mocks/mock-users';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}
  getUsers(): Observable<User[]> {
    return of(USERS);
  }
  saveUser(updateUser): Observable<User> {
    // saveUser
    return of(updateUser);
  }
}
