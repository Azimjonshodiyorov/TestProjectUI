import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { signUp } from '../../models/signUp';
import { Login } from '../../models/login';


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


 getUserByEmail(email: string): Observable<User> {
   return this.http.get<User>(`${this.userApiUrl}?email=${email}`);
 }  
                              

 logIn(login: Login): Promise<User> {
  return this.http.post<User>(`${this.userApiUrl}/login`, login).toPromise()
    .then((data) => {
      if (data) {
        return data;
      }
      throw new Error("No user data returned");
    })
    .catch((error) => {
      console.log('Error:', error);
      throw error;
    });
}

registerUser(user: User): Promise<User> {
  return this.http.post<User>(this.userApiUrl, user).toPromise()
   .then((data) => {
      if (data) {
        return data;
      }
      throw new Error("No user data returned");
    })
   .catch((error) => {
      console.log('Error:', error);
      throw error;
    }); 
}
}
