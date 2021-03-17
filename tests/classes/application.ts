import { expect } from "chai";
import { Application } from "../../src/classes/Application";

describe("Testing class Application.", () => {
  let app: Application;

  beforeEach(() => {
    app = new Application();
  });

  it("Should return an array of class Team", () => {
    expect(app.table).to.be.an("array");
  });

  it("Should return a promise of game.", () => {
    expect(app.getGameList()).to.be.a("promise");
  });

  it("Should generate and return an array of team.", () => {
    expect(app.generateTable()).to.be.an("array");
  });

  it("Should return an array of team that is set for display.", () => {
    expect(app.displayTable()).to.be.an("array");
  });

  it("Should generate and return an array of team for halftime as final result.", () => {
    expect(app.generateTableHalfTime()).to.be.an("array");
  });

  it("Should return an array of team sore of halftime for display.", () => {
    expect(app.displayHalfTable()).to.be.an("array");
  });
});
