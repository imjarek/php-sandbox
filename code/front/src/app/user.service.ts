import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class UserService {

    constructor(private messageService: MessageService) { }
    getUsers(): Observable<User[]> {
        this.messageService.add('UserService: users fetched');
        return of(USERS);
    }
}
