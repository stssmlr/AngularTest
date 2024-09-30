import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './user';
import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, UserFormComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular-PV212';
  name = "Vlad Tymoshchuk";

  users: IUser[] = USERS;

  // properties and methods
  changeName() {
    this.name += '!';
  }
  createUser(user: IUser) {
    this.users.push(user);
  }

  
  clearAll() {
    this.users = [];
  }

  deleteItem(id: number){
    let index = this.users.findIndex(x=> x.id === id)
    if (index !== -1)
      this.users.splice(index, 1);
  }
}