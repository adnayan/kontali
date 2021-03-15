export interface IGame {
  date: string;
  startTime: string;
  homeTeam: string;
  awayTeam: string;
  homeGoalHalfTime: number;
  awayGoalsHalfTime: number;
  homeGoalFullTime: number;
  awayGoalFullTime: number;
  status: string;
  points?: number;
  goalDifference?: number;
}
