import { Injectable } from '@angular/core';
// import { USERS } from './mock-users';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
    
    private usersUrl = 'http://axis/api/users';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}
    private log(message: string) {
        this.messageService.add('UserService: ' + message);
    }
      
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl)
    }
}
