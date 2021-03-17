import { expect } from "chai";

import { Team } from "../../src/classes/Team";

describe("Testing class Team.", () => {
  let team: Team;
  beforeEach(() => {
    team = new Team("Liverpool FC");
  });

  it("Should set a name to the team and return the name, ie 'Liverpool'.", () => {
    expect(team.setName("Liverpool")).to.equal("Liverpool");
  });

  it("Should return name of the team which is a string.", () => {
    expect(team.name).to.be.a("string");
  });

  it("Name of the team should match 'Liverpool FC'", () => {
    expect(team.name).to.equal("Liverpool FC");
  });

  it("Should return points of the team which is a number.", () => {
    expect(team.points).to.be.a("number");
  });

  it("Should return points value of 3.", () => {
    expect(team.increasePoint(3)).to.equal(3);
  });

  it("Should return matchPlayed of the team which is a number.", () => {
    expect(team.matchPlayed).to.be.a("number");
  });

  it("Should return matchPlayed value of 1.", () => {
    expect(team.increaseMatchPlayed()).to.equal(1);
  });

  it("Should return goalDifference of the team which is a number.", () => {
    expect(team.goalDifference).to.be.a("number");
  });

  it("Should return goalDifference of value 3.", () => {
    expect(team.changeGoalDifference(3)).to.equal(3);
  });

  it("Should decrease goal difference by 2", () => {
    expect(team.changeGoalDifference(-2)).to.equal(-2);
  });
});
