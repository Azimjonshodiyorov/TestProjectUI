import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { signUp } from '../../models/signUp';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private userApiUrl = '';
constructor(private http : HttpClient) {

 }

 getUsers(): Observable<User[]> {
   return this.http.get<User[]>(this.userApiUrl);
 }  

 getUserById(id: number): Observable<User> {
   return this.http.get<User>(`${this.userApiUrl}/${id}`);
 }  
 createUser(user: signUp): Observable<signUp> {
   return this.http.post<signUp>(this.userApiUrl, user);
 }  
 updateUser(user: User): Observable<User> {
   return this.http.put<User>(`${this.userApiUrl}/${user.id}`, user);
 }  
 deleteUser(id: number): Observable<User> {
   return this.http.delete<User>(`${this.userApiUrl}/${id}`);
 }
}
