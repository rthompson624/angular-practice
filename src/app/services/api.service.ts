import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }
}
