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
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null)
    this.postService.getPostById(+id).subscribe((data)=> 
    {
      this.post = data;
      console.log(this.post); 
    })
    else{ 
      console.log("No id provided");
    }
  }

}
