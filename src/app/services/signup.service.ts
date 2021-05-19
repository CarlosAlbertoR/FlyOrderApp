import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

const apiUrl = environment.apiLoginUrl;

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http: HttpClient) { }

  executePostRequest(query: string, body: Client) {
    const headers = new Headers();
    const url = environment.apiLoginUrl + query;
    //console.log(url);
    //console.log(JSON.stringify(body));
    return this.http.post(url, body);
  }
}
