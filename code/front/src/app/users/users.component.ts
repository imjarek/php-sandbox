import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';

@Component({
    selector: 'app-heroes',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor() { }
    users = USERS;

    user: User = {
        id: 1,
        name: 'Sergey'
    };

    ngOnInit() {
    }

}