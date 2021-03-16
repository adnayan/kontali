import { IGame } from "../interfaces/IGame";

export class Game {
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

  set games(games: Array<IGame>) {
    this._games = games;
  }

  public push(game: IGame): Array<IGame> {
    this._games.push(game);
    return this._games;
  }
}
