import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResult} from "../models/steamish/i-api-result";
import {Library} from "../models/steamish/library";

@Injectable({
  providedIn: 'root'
})
export class HttpClientLibraryService {

  urlApi: string = 'https://steam-ish.test-02.drosalys.net';

  constructor(private httpClient: HttpClient) { }

  getUserLibraries(accountId: string, urlUser: string = '/api/libraries/'+accountId): Observable<IApiResult<Library>> {
    return this.httpClient.get<IApiResult<Library>>(this.urlApi + urlUser);

  }
}
