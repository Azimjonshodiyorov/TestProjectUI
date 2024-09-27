import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private postApiUrl = '';
constructor(private http: HttpClient) { 

}

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postApiUrl);
  } 

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postApiUrl}/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postApiUrl, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postApiUrl}/${post.id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.postApiUrl}/${id}`);
  }
}
