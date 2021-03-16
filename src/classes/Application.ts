import { Game } from "./Game";

export class Application {
  private _data: Game;
  constructor() {
    this._data = new Game();
  }
}
