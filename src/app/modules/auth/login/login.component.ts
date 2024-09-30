import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../../core/models/login';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  user:Login = {email: '', password: ''};
  constructor(
    private userService : UserService,
    private router: Router
  ) 
  { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('' , Validators.required)
    }); 
  }

  onSubmit(): void {
    this.userService.logIn(this.user).then(
      (data) => {
        console.log(data);
        this.router.navigate(['post', 'login']);
      },
      (error) => {
        console.log(error);
      }
    );
   
  }


}
