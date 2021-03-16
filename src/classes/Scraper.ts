import axios, { AxiosInstance } from "axios";
import cheerio from "cheerio";
import { IGame } from "../interfaces/IGame";
import { Game } from "./Game";

export class Scraper {
  private _url: string;
  private _games: Game;
  private axios: AxiosInstance;
  constructor(url: string) {
    this._url = url;
    this._games = new Game();
    this.axios = axios.create();
  }

  get url(): string {
    return this._url;
  }

  get games(): Game {
    return this._games;
  }

  async scrap(): Promise<Game> {
    let games: Game = new Game();
    try {
      const res = await this.axios.get(this._url);
      const html = await res.data;
      const $ = await cheerio.load(html);
      const table = await $(".nifs_nopad");
      table.each((i, el) => {
        let game: IGame = {
          date: "",
          round: "",
          homeTeam: "",
          awayTeam: "",
          homeGoalHalfTime: 0,
          awayGoalsHalfTime: 0,
          homeGoalFullTime: 0,
          awayGoalFullTime: 0,
          status: "",
        };
        game.date = $(el).find(".nifs_link").first().text();
        game.round = $(el).find("span > div").text();
        game.homeTeam = $(el).find(".nifs_laglink_nopad").first().text().trim();
        game.awayTeam = $(el).find(".nifs_laglink_nopad").last().text().trim();

        game.homeGoalFullTime = parseInt(
          $(el)
            .find(".res > .nifs_link")
            .text()
            .trim()
            .split("(")[0]
            .split("-")[0]
        );
        game.awayGoalFullTime = parseInt(
          $(el)
            .find(".res > .nifs_link")
            .text()
            .trim()
            .split("(")[0]
            .split("-")[1]
        );
        game.homeGoalHalfTime = parseInt(
          $(el)
            .find(".res > .nifs_link > span")
            .text()
            .replace(/^\W+|\W+$/g, "")
            .split("-")[0]
        );
        game.awayGoalsHalfTime = parseInt(
          $(el)
            .find(".res > .nifs_link > span")
            .text()
            .replace(/^\W+|\W+$/g, "")
            .split("-")[1]
        );

        game.status = $(el).find(".avb > span > a > span").text().trim();

        // Push game to games
        console.log(game);
      });
    } catch (error) {
      console.error(error);
    }
    return games;
  }
}
