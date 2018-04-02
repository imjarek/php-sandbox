import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { UserService } from './user.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserDetailComponent,
        MessagesComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [ UserService, MessageService ],
        bootstrap: [AppComponent]
})
export class AppModule { }
