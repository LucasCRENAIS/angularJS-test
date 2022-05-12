import {Component, OnInit} from '@angular/core';
import {HttpClientGameAccountsService} from "../../services/http-client-user.service";
import {IApiResult} from "../../models/steamish/i-api-result";
import {User} from "../../models/steamish/user";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";


@Component({
  selector: 'app-game-accounts',
  templateUrl: './game-accounts.component.html',
  styleUrls: ['./game-accounts.component.scss']
})
export class GameAccountsComponent implements OnInit {

  apiResult: IApiResult<User>|undefined;


  constructor(private gameAccountsService : HttpClientGameAccountsService) { }

  ngOnInit(): void {
    this.gameAccountsService.getUsers().subscribe((results) => {
      this.apiResult = results;
    });
  }

  updateResult(endUrl: string = '/api/accounts?page=1'): void {
    this.gameAccountsService.getUsers(endUrl)
      .pipe(
        catchError(err => {
          console.log('Error lors de la récupération des données', err);
          return throwError(err);
        })
      )
      .subscribe((results) => {
        this.apiResult = results;
        console.log(results["hydra:view"])
        // results["hydra:member"]
      });
  }

  getRandomLightColor(): string {
      return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }
}
