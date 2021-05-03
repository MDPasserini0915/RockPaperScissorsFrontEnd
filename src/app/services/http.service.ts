import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { API_PATHS } from '../config/api-paths.constants';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  // private getBaseHttpOptions(){
  //   return {
  //     withCredentials: false,
  //     params: new HttpParams(),
  //     headers: new Headers({
  //       'Cache-Control': 'no-cache'
  //     })
  //   }
  // }

  get<T>(url:string): Observable<T>{
    // const httpOptions = this.getBaseHttpOptions();
    // if(params) {
    //   httpOptions.params = params;
    // }

    return this.httpClient.get<T>(API_PATHS.BASE + url).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  public post<T>(url:string, body?:any): Observable<T>{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin' : 'http://localhost:4200'
    })

    return this.httpClient.post<T>(API_PATHS.BASE + url, body, {headers: headers}).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  public put<T>(url:string, body?:any): Observable<T>{
    return this.httpClient.put<T>(API_PATHS.BASE + url, body).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  public delele<T>(url:string): Observable<T> {
    return this.httpClient.delete<T>(API_PATHS.BASE + url).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
