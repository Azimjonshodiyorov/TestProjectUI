import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../core/models/register';
import { Gender } from '../../../core/models/gender.enum';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule ],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    gender: Gender.Male,
    email: '',
    password: '',
    phoneNumber: '',
    confirmPassword: ''  // Confirm password should match with password field 
  } ;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required, Validators.minLength(8)]
    });   
  }


  onRegisterSubmit(): void {
        if (!form.valid) {
      console.error('Form is incomplete');
      alert('Please fill out all required fields correctly.');
      return;
    }
  }


  validateForm(): boolean {
    if (this.register.password !== this.register.confirmPassword) {
      alert('Passwords do not match!');
      return false;
    }

    if (!this.validateEmail(this.register.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Boshqa validatsiyalarni qo'shishingiz mumkin
    return true;
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}
