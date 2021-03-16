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

  it("Should return name of the team.", () => {
    expect(team.name).to.be.a("string");
  });

  it("Name of the team should match 'Liverpool FC'", () => {
    expect(team.name).to.equal("Liverpool FC");
  });

  it("Should increase point by 3.", () => {
    expect(team.setPoint(3)).to.equal(3);
  });

  it("Sholud increase match played by 1.", () => {
    expect(team.increaseMatchPlayed(1)).to.equal(1);
  });

  it("Should increase goal difference by 1.", () => {
    expect(team.increaseGoalDifference(1)).to.equal(1);
  });

  it("Should decrease goal difference by 2", () => {
    expect(team.decreaseGoalDifference(2)).to.equal(-2);
  });
});
