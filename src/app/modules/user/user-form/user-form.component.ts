import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../../core/models/user';
import { Gender } from '../../../core/models/gender.enum';
import { UserService } from '../../../core/services/user/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, // Standalone komponent deb belgilash
  imports: [RouterModule , NgFor ,FormsModule],
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = { 
    id: 0, 
    firstName: '', 
    lastName: '', 
    birthDate: new Date(), 
    email: '', 
    password: '', 
    gender: Gender.Male, 
    phoneNumber: '', 
    createAt: new Date(), 
    updatedAt: new Date()  
  };
  
  isEditMode = false;
  constructor(
    private userService:UserService , 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
      {
        this.isEditMode = true;
        this.userService.getUserById(+id).subscribe(
          (data) => {
            this.user = data;
          }
        );
      }   
  }

  onSubmit() : void
  {
      if(this.isEditMode)
      {
        this.userService.updateUser(this.user).subscribe(
          () => this.router.navigate(['/user', this.user.id])
        );
      }
      else
      {
        this.userService.createUser(this.user).subscribe(
          () => this.router.navigate(['/user', this.user.id])
        );
      } 
  }

}
