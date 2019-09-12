import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ApiResult} from './apiResult';
@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) {
  }

  public getBooks(searchValue): Observable<ApiResult> {
    let params = new HttpParams();
    const APIkey = 'AIzaSyA-QyOkAKkm36tDkKSRhtBkZ7M_iV8NRRM';

    params = params.append('q', 'search+' + searchValue);
    params = params.append('key', APIkey);

    return this.http
      .get<ApiResult>('https://www.googleapis.com/books/v1/volumes', {params: params});
  }
}
