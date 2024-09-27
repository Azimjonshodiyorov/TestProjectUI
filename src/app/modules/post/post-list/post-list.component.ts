import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../../../core/models/post';
import { PostService } from '../../../core/services/post/post.service';

@Component({
  standalone: true, // Standalone komponent deb belgilash
  imports: [RouterModule , NgFor], // RouterModule ni komponentga import qilish
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[] = [];

  constructor(private postService : PostService) 
  {

  }
  ngOnInit(): void {
    this.postService.getPosts()
    .subscribe((data)=>
    {
      this.posts = data;
    });
  }
   
  deletePost(id: number) {
  if(confirm('Are you sure you want to delete this post?')) {
       this.postService.deletePost(id).subscribe(()=>{
        this.posts = this.posts.filter(post => post.id!== id);
       })
  }
  }
}
