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

  registerForm!: FormGroup;

  register: Register = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    gender: Gender.Male,
    email: '',
    password: '',
    phoneNumber: '',
    confirmPassword: ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [this.register.firstName, Validators.required],
      lastName: [this.register.lastName, Validators.required],
      birthDate: [this.register.birthDate, Validators.required],
      gender: [this.register.gender, Validators.required],
      email: [this.register.email, [Validators.required, Validators.email]],
      password: [this.register.password, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [this.register.confirmPassword, [Validators.required, Validators.minLength(8)]]
    });
  }

  onRegisterSubmit(): void {
    if (!this.registerForm.valid) {
      console.error('Forma to\'liq emas yoki noto\'g\'ri to\'ldirilgan.');
      alert('Iltimos, barcha kerakli maydonlarni to\'g\'ri to\'ldiring.');
      return;
    }
    console.log(this.registerForm.value);
  }
}
