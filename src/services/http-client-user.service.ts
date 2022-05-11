import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResult} from "../models/steamish/i-api-result";
import {User} from "../models/steamish/user";

@Injectable({
  providedIn: 'root'
})
export class HttpClientGameAccountsService {

  urlApi: string = 'https://steam-ish.test-02.drosalys.net';

  constructor(private httpClient: HttpClient) { }

  getUsers(urlUsersPaginated: string = '/api/accounts?page=1'): Observable<IApiResult<User>> {
    return this.httpClient.get<IApiResult<User>>(this.urlApi + urlUsersPaginated);

  }

  getOneUser(accountId: string, urlUser: string = '/api/accounts/'+accountId): Observable<User> {
    return this.httpClient.get<User>(this.urlApi + urlUser);

  }
}
