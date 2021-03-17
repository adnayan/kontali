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

  get points(): number {
    return this._team.points;
  }

  get goalDifference(): number {
    return this._team.goalDifference;
  }

  get matchPlayed(): number {
    return this._team.matchPlayed;
  }

  setName(name: string): string {
    this._team.name = name;
    return this._team.name;
  }

  increasePoint(point: number): number {
    this._team.points += point;
    return this._team.points;
  }

  increaseMatchPlayed(): number {
    this._team.matchPlayed = this._team.matchPlayed + 1;
    return this._team.matchPlayed;
  }

  changeGoalDifference(dif: number): number {
    this._team.goalDifference = this._team.goalDifference + dif;
    return this._team.goalDifference;
  }
}
