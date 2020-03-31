import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { url } from './config';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl =`http://localhost:3000/api`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createPost(postData: any): Observable<any> {
    let url = this.postUrl + '/post/create-post';
    console.log('url', url)
    return this.http.post<any>(url, postData, this.httpOptions).pipe(
      tap((newpost: any) => console.log(`new post`)),
      catchError(this.handleError<any>('errorpost'))
    );
  }

  getAllPost(): Observable<any[]> {
    return this.http.get<any[]>(this.postUrl + '/post/get-all-post')
      .pipe(
        tap(_ => console.log('fetched post')),
        catchError(this.handleError<any[]>('posts', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}