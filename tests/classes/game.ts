import { expect } from "chai";

import { Game } from "../../src/classes/Game";
import { IGame } from "../../src/interfaces/IGame";

describe("Testing class Game.", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

  it("Should return a value of empty array.", () => {
    expect(game.games).to.be.an("array").that.is.empty;
  });

  it("Should push new game into the games array and return the final array, which length must be 1.", () => {
    let gameItem: IGame = {
      date: "2020-12-22",
      round: "Runde 30",
      homeTeamName: "Liverpool FC",
      awayTeamName: "Chelsea FC",
      homeGoalHalfTime: 1,
      awayGoalsHalfTime: 0,
      homeGoalFullTime: 2,
      awayGoalFullTime: 1,
      status: "Spilt",
    };
    expect(game.push(gameItem).length).to.equal(1);
  });
});
