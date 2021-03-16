import { expect } from "chai";

import { Game } from "../../src/classes/Game";

describe("Testing class Data.", () => {
  let data: Game;
  beforeEach(() => {
    data = new Game();
  });

  it("Should return a value of empty array.", () => {
    expect(data.games).to.be.an("array").that.is.empty;
  });
});
