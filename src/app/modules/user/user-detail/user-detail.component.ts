import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../core/models/user';
import { Gender } from '../../../core/models/gender.enum';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
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
  }
  constructor(
    private userServie : UserService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if(id)
      this.userServie.getUserById(+id).subscribe(
    (data) => 
    {
      this.user = data;
    })
  }

}
