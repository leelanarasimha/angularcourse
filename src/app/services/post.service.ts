import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from '../posts/Post.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('custom', 'hai');
    searchParams = searchParams.append('name', 'Leela');

    return this.http
      .get<{ [key: string]: Post }>(
        `https://ng-complete-guide-aad09.firebaseio.com/posts.json`,
        {
          headers: new HttpHeaders({
            'custom-header': 'leela',
          }),
          params: searchParams,
        }
      )
      .pipe(
        map((response) => {
          let posts: Post[] = [];
          for (let key in response) {
            posts.push({ ...response[key], key });
          }
          return posts;
        })
      );
  }

  createPost(postData: Post) {
    return this.http.post<{ name: string }>(
      'https://ng-complete-guide-aad09.firebaseio.com/posts.json',
      postData,
      {
        headers: new HttpHeaders({
          'custom-header': 'post Leela',
        }),
      }
    );
  }
  clearPosts() {
    this.http
      .delete('https://ng-complete-guide-aad09.firebaseio.com/posts.json')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
