import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../core/interfaces/core.interfaces';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  public getListUsers(page: number, pageSize: number): Observable<User[]> {
    return this.httpClient.get<User[]>('https://api.github.com/users', {
      params: {
        page: page.toString(),
        per_page: pageSize.toString()
      }
    });
  }

  public getUserById(userId: string): Observable<User> {
    return this.httpClient.get<User>(`https://api.github.com/users/${userId}`);
  }

  public getListRepos(userId: string): Observable<any> {
    return this.httpClient.get( `https://api.github.com/users/${userId}/repos`);
  }
}
