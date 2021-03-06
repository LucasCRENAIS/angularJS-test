import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './chess-game/chess-game.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { GameIndexComponent } from './game-index/game-index.component';
import {GameAccountsComponent} from "./game-accounts/game-accounts.component";
import { AccountShowComponent } from './account-show/account-show.component';
import { DigimonComponent } from './digimon/digimon.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DigimonLevelComponent } from './digimon-level/digimon-level.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    NavbarComponent,
    GameIndexComponent,
    GameAccountsComponent,
    AccountShowComponent,
    DigimonComponent,
    PaginatorComponent,
    DigimonLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
