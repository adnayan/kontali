import { expect } from "chai";

import { Data } from "../../src/classes/Data";

describe("Testing class Data.", () => {
  let data: Data;
  beforeEach(() => {
    data = new Data();
  });

  it("Should return a value of empty array.", () => {
    expect(data.games).to.be.an("array").that.is.empty;
  });
});
