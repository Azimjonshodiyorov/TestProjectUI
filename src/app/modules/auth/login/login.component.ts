import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { Router } from 'express';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  }

  onSubmit(loginForm): void {

  }


}
