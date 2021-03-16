import { Game } from "./Game";
import { Scraper } from "./Scraper";
import { Team } from "./Team";

export class Application {
  private _scraper: Scraper;
  private _table: Array<Team>;
  private _gameList: Game;
  constructor() {
    this._gameList = new Game();
    this._table = new Array<Team>();
    this._scraper = new Scraper(
      "https://www.nifs.no/kamper.php?land=1&t=5&u=682936"
    );
  }

  get table(): Array<Team> {
    return this._table;
  }

  public async getGameList(): Promise<Game> {
    this._gameList = await this._scraper.scrap();
    return this._gameList;
  }
}
