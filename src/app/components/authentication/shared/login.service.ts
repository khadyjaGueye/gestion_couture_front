import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User, UserAuth } from '../../service/model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticatedUser: User | undefined;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<UserAuth> {
    const url = `${environment.apiBaseUrl}/login`;
    return this.http.post<UserAuth>(url, user);
  }

  logout(id: number) {
    const url = `${environment.apiBaseUrl}/login/${id}`;
    return this.http.get(url);
  }

  public authenticateUser(user: User, token: string): Observable<Boolean> {
    this.authenticatedUser = user;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    return of(true);
  }
}
