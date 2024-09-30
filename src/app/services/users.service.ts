import { Injectable } from '@angular/core';
import { IUser } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const api = "https://jsonplaceholder.typicode.com";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<IUser[]> {
    // load users from server...
    return this.httpClient.get<IUser[]>(api + "/todos");
  }
}