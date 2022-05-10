
export class User {

  private _name: string = '';
  private _email: string = '';
  private _nickname: string = '';
  private _wallet: number = 0;
  private _libraries: Array<string>;

  constructor() {
    this._libraries= [];
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get wallet(): number {
    return this._wallet;
  }

  set wallet(value: number) {
    this._wallet = value;
  }

  get libraries(): Array<string> {
    return this._libraries;
  }

  set libraries(value: Array<string>) {
    this._libraries = value;
  }
}
