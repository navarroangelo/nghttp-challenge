import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(private http: HttpClient) {}
  getUsersRemotely() {
    return this.http.get('https://restcountries.com/v3.1/region/asia');
  }
}
