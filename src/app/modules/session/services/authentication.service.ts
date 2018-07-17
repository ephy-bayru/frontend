import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  baseUrl = 'http://localhost/smart_school/index.php/api/login/';
  private header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  private body: URLSearchParams;
    constructor(private http: HttpClient) {
        this.body = new URLSearchParams();
    }

    login(username: string, password: string) {
        this.body.set('user_name', username);
        this.body.set('password',  password);
        return this.http.post<any>(this.baseUrl, this.body.toString(), { 'headers' : this.header}) .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('activeUser',
                     JSON.stringify({
                         username,
                         token: res.token
                         }));
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('activeUser');
    }
}
