import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  standalone: true, 
  imports: [RouterModule , NgFor],
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User[] = [];
  constructor(private userService : UserService) 
  { }

  ngOnInit():void {
   this.userService.getUsers()
   .subscribe(
    (data)=>{
      this.users = data;
    })   
  }         

  deleteUser(userId: number): void {
    if(!confirm("Are you sure?")) return;  // user uchun confirm qilishi uchun  
    this.userService.deleteUser(userId)
   .subscribe(
    ()=>{
      this.users = this.users.filter(user=>user.id!==userId);
    })   
  }   

}
