import { IUser } from '../user';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  
  @Input()
  user?: IUser;
  
  @Output()
  onDelete = new EventEmitter<number>();
  remove() {
    // how to remove? - No
    this.onDelete.emit(this.user?.id);
  }
  changeRole() {
    if (this.user)
      this.user.completed = (this.user?.completed === false ? true : false);
  }

}