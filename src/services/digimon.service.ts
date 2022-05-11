import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Digimon} from "../models/digimon/digimon";

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  urlApi: string = 'https://digimon-api.herokuapp.com/api/digimon';

  constructor(private httpClient: HttpClient) { }

  getDigimons(): Observable<Array<Digimon>> {
    return this.httpClient.get<Array<Digimon>>(this.urlApi);
  }
}
