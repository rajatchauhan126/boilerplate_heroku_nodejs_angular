import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { url } from './config';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
  private postUrl =`http://localhost:3000/api`;
  // private postUrl =`api`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createPost(postData: any): Observable<any> {
    let url = this.postUrl + '/counter';
    return this.http.post<any>(url, postData, this.httpOptions).pipe(
      tap((newpost: any) => { }),
      catchError(this.handleError<any>('errorpost'))
    );
  }

  setgamesData(gamesData: any): Observable<any> {
    let url = this.postUrl + '/post-games';
    return this.http.post<any>(url, gamesData, this.httpOptions).pipe(
      tap((newpost: any) => { }),
      catchError(this.handleError<any>('errorpost'))
    );
  }

  getgamesData(gamesData: any): Observable<any> {
    let url = this.postUrl + '/get-games';
    return this.http.post<any>(url, gamesData, this.httpOptions).pipe(
      tap((newpost: any) => { }),
      catchError(this.handleError<any>('errorpost'))
    );
  }

  postgamesCountData(gamesData: any): Observable<any> {
    let url = this.postUrl + '/post-games-count';
    return this.http.post<any>(url, gamesData, this.httpOptions).pipe(
      tap((newpost: any) => { }),
      catchError(this.handleError<any>('errorpost'))
    );
  }


  setCovidData(covidData: any): Observable<any> {
    let url = this.postUrl + '/admin/post-covid';
    return this.http.post<any>(url, covidData, this.httpOptions).pipe(
      tap((newpost: any) => { }),
      catchError(this.handleError<any>('errorpost'))
    );
  }

  getCovidData(covidData: any): Observable<any> {
    let url = this.postUrl + '/admin/get-covid';
    return this.http.post<any>(url, covidData, this.httpOptions).pipe(
      tap((newpost: any) => { }),
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
