import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Post } from './Post.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postForm: FormGroup;
  posts: Post[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
    this.getPosts();
  }

  getPosts() {
    this.http
      .get<{ [key: string]: Post }>(
        `https://ng-complete-guide-aad09.firebaseio.com/posts.json`
      )
      .pipe(
        map((response) => {
          let posts: Post[] = [];
          for (let key in response) {
            posts.push({ ...response[key], key });
          }
          return posts;
        })
      )
      .subscribe((response: Post[]) => {
        this.posts = response;
      });
  }

  onCreatePost() {
    const postData = this.postForm.value;
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-aad09.firebaseio.com/posts.json',
        postData
      )
      .subscribe((response) => {
        this.getPosts();
      });
  }
}
