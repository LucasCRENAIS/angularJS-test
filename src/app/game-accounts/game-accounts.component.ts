import { Component, OnInit } from '@angular/core';
import {HttpClientGameAccountsService} from "../../services/http-client-user.service";
import {IApiResult} from "../../models/steamish/i-api-result";
import {User} from "../../models/steamish/user";


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

}
