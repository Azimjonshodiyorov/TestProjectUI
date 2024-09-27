import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Post } from '../../../core/models/post';
import { PostService } from '../../../core/services/post/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, // Standalone komponent deb belgilash
  imports: [RouterModule , NgFor ,FormsModule], // RouterModule ni komponentga import qilish
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post:Post = {
    id: 0,
    title : '',
    description: '',
    author : '',
    createdAt : new Date(),
    updatedAt : new Date(),
  };
  isEditMode = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
     ) { }

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
   if (id) {
    this.isEditMode = true;
    this.postService.getPostById(+id)
    .subscribe((post) => {
      this.post = post;
    });
  }}
   
  onSubmit(): void {
    if (this.isEditMode) {
      this.postService.updatePost(this.post).subscribe(() => {
        this.router.navigate(['/posts']);
      });
    } else {
      this.postService.createPost(this.post).subscribe(() => {
        this.router.navigate(['/posts']);
      });
    } 
  }
}
