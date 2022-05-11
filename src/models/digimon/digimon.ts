
export class Digimon {

  private _name: string = '';
  private _img: string = '';
  private _level: string = '';

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  get img(): string {
    return this._img;
  }

  get level(): string {
    return this._level;
  }

}
