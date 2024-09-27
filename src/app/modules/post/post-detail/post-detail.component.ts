import { Component, OnInit } from '@angular/core';
import { Post } from '../../../core/models/post';
import { PostService } from '../../../core/services/post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:Post = {
    id: 0,
    title : '',
    description: '',
    author : '',
    createdAt : new Date(),
    updatedAt : new Date(),
  };

  constructor(
    private postService : PostService,
    private route: ActivatedRoute) 
  {}
  
  ngOnInit() {
  }

}
