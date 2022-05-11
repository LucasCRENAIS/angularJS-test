import {Game} from "./game";

export class Library {

  private _id: number = 0;
  private _installed: boolean = false;
  private _gameTime: number = 0;
  private _game: string = Game.name;
  private _account: string = '';
  private _lastUsed: string = ""

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get installed(): boolean {
    return this._installed;
  }

  set installed(value: boolean) {
    this._installed = value;
  }

  get gameTime(): number {
    return this._gameTime;
  }

  set gameTime(value: number) {
    this._gameTime = value;
  }

  get game(): string {
    return this._game;
  }

  set game(value: string) {
    this._game = value;
  }

  get account(): string {
    return this._account;
  }

  set account(value: string) {
    this._account = value;
  }

  get lastUsed(): string {
    return this._lastUsed;
  }

  set lastUsed(value: string) {
    this._lastUsed = value;
  }
}
