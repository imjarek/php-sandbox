import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'app-heroes',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(private userService: UserService) { }

    users: User[];
    
    getUsers(): void {
      this.userService.getUsers()
        .subscribe(users => this.users = users);
    }
    selectedUser: User;

    ngOnInit() {
        this.getUsers();
    }
   
    onSelect(user: User): void {
      this.selectedUser = user;
    }
}