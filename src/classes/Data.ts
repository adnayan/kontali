import { IGame } from "../interfaces/IGame";

export class Data {
  private _games: Array<IGame>;

  constructor() {
    this._games = new Array<IGame>();
  }

  public pushGame(game: IGame) {
    this._games.push(game);
  }

  get games(): Array<IGame> {
    return this._games;
  }
}
