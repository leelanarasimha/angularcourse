import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Post } from '../posts/Post.model';
import { map, tap } from 'rxjs/operators';

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
        observe: 'body',
      }
    );
  }
  clearPosts() {
    this.http
      .delete('https://ng-complete-guide-aad09.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text',
      })
      .pipe(
        tap((response) => {
          if (response.type === HttpEventType.Sent) {
            console.log('request sent');
          }

          if (response.type === HttpEventType.Response) {
            console.log(response);
          }
        })
      )
      .subscribe((response) => {
        //console.log(response);
      });
  }
}
