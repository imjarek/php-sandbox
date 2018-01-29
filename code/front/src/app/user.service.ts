import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

    constructor() { }
    getUsers(): Observable<User[]> {
        return of(USERS);
    }
}
