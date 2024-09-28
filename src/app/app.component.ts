import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
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

  clearAll() {
    this.users = [];
  }

  deleteItem(id: number){
    let index = this.users.findIndex(x=> x.id === id)
  }
}