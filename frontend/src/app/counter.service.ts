import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  // private postUrl = `api`;
  private postUrl = `http://localhost:3000/api`;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createPost(postData: any): Observable<any> {
    let url = this.postUrl + '/counter';
    return this.http.post<any>(url, postData, this.httpOptions).pipe(
      tap((newpost: any) => console.log(`new post`)),
      catchError(this.handleError<any>('errorpost'))
    );
  }

  gamesData(gamesData: any): Observable<any> {
    let url = this.postUrl + '/games';
    return this.http.post<any>(url, gamesData, this.httpOptions).pipe(
      tap((newpost: any) => console.log(`new games`)),
      catchError(this.handleError<any>('errorpost'))
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
