import { ITeam } from "../interfaces/ITeam";

export class Team {
  private _team: ITeam;
  constructor(name?: string) {
    this._team = {
      name: name || "",
      points: 0,
      matchPlayed: 0,
      goalDifference: 0,
    };
  }
  get name(): string {
    return this._team.name;
  }

  setName(name: string): string {
    this._team.name = name;
    return this._team.name;
  }

  setPoint(point: number): number {
    this._team.points += point;
    return this._team.points;
  }

  increaseMatchPlayed(inc: number): number {
    this._team.matchPlayed += inc;
    return this._team.matchPlayed;
  }

  increaseGoalDifference(dif: number): number {
    this._team.goalDifference += dif;
    return this._team.goalDifference;
  }

  decreaseGoalDifference(dif: number): number {
    this._team.goalDifference -= dif;
    return this._team.goalDifference;
  }
}
