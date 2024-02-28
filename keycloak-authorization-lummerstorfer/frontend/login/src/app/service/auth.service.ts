import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getToken(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = `client_id=htlleonding-service&` +
      `client_secret=AkIRaaboJ23Q64jSjtN9gkmfMumUybD8&` +
      `grant_type=password&` +
      `username=${username}&` +
      `password=${password}&` +
      `scope=openid`;

    return this.http.post('https://auth.htl-leonding.ac.at/realms/htl-leonding/protocol/openid-connect/token', body, { headers });
  }

  getUserInfo(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('https://auth.htl-leonding.ac.at/realms/htl-leonding/protocol/openid-connect/userinfo', { headers });
  }

}
