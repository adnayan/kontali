import { Team } from "../classes/Team";

export interface IGame {
  date: string;
  round: string;
  homeTeamName: string;
  awayTeamName: string;
  homeGoalHalfTime: number;
  awayGoalsHalfTime: number;
  homeGoalFullTime: number;
  awayGoalFullTime: number;
  status: string;
}
