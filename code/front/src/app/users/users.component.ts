import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
    selector: 'app-heroes',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor() { }
    users = USERS;
    
    selectedUser: User;

    ngOnInit() {
    }
   
    onSelect(user: User): void {
      this.selectedUser = user;
    }
}