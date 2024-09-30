import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";
import { UserFormComponent } from "../user-form/user-form.component";
import { IUser, USERS } from '../user';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, UserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {
  
  users: IUser[] = [];
  constructor(private usersService: UsersService) {
    usersService.getAll().subscribe(data => {
      this.users = data;
    })
  }

  // properties and methods
  createUser(user: IUser) {
    this.users.push(user);
  }
  deleteItem(id: number) {
    let index = this.users.findIndex(x => x.id === id);
    if (index !== -1)
      this.users.splice(index, 1);
  }
  clearAll() {
    this.users = [];
  }
}