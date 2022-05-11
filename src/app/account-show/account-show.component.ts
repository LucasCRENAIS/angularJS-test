import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClientGameAccountsService} from "../../services/http-client-user.service";
import {IApiResult} from "../../models/steamish/i-api-result";
import {User} from "../../models/steamish/user";
import {HttpClientLibraryService} from "../../services/http-client-library.service";
import {Library} from "../../models/steamish/library";

@Component({
  selector: 'app-account-show',
  templateUrl: './account-show.component.html',
  styleUrls: ['./account-show.component.scss']
})
export class AccountShowComponent implements OnInit {

  apiResult: User|undefined;
  apiLibraryResult : IApiResult<Library>|undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private libraryService : HttpClientLibraryService,
    private gameAccountsService: HttpClientGameAccountsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
          this.gameAccountsService.getOneUser(params.accountId).subscribe((results) => {
          this.apiResult = results;
          this.libraryService.getUserLibraries(params.accountId).subscribe((library) =>
          this.apiLibraryResult = library
          )
        });
        console.log(this.apiLibraryResult)

      }
    )
  }

  getRandomLightColor(): string {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }
}
