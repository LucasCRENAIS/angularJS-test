import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {GameIndexComponent} from "./game-index/game-index.component";
import {GameAccountsComponent} from "./game-accounts/game-accounts.component";
import {AccountShowComponent} from "./account-show/account-show.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: '', component: ChessGameComponent },
  { path: 'game', component: GameIndexComponent },
  { path: 'game/accounts', component: GameAccountsComponent },
  { path: 'game/accounts/:accountId', component: AccountShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
