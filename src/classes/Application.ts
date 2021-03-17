import { Game } from "./Game";
import { Scraper } from "./Scraper";
import { Team } from "./Team";

export class Application {
  private _scraper: Scraper;
  private _table: Array<Team>;
  private _halfTable: Array<Team>;
  private _gameList: Game;
  constructor() {
    this._gameList = new Game();
    this._table = new Array<Team>();
    this._halfTable = new Array<Team>();
    this._scraper = new Scraper(
      "https://www.nifs.no/kamper.php?land=1&t=5&u=682936"
    );
  }

  get table(): Array<Team> {
    return this._table;
  }

  get halfTable(): Array<Team> {
    return this._halfTable;
  }

  public async getGameList(): Promise<Game> {
    this._gameList = await this._scraper.scrap();
    return this._gameList;
  }

  public generateTable(): Array<Team> {
    this._gameList.games.forEach((element, glIndex) => {
      // Initialize variable for flagging of data process
      let homeTeamUpdated: boolean = false;
      let awayTeamUpdated: boolean = false;

      // Initialize variable for name of winner or draw
      let winner: string = "";
      // set data for the winner variable
      if (element.homeGoalFullTime > element.awayGoalFullTime) {
        winner = element.homeTeamName;
      } else if (element.homeGoalFullTime < element.awayGoalFullTime) {
        winner = element.awayTeamName;
      } else {
        winner = "draw";
      }

      // Data for Team
      // points, name, matchPlayed, goalDifference
      this._table.filter((item, tIndex) => {
        if (item.name == element.homeTeamName) {
          homeTeamUpdated = true;
          // Adjust the existing data in the _table for homeTeam
          this._table[tIndex].increaseMatchPlayed();
          this._table[tIndex].changeGoalDifference(
            element.homeGoalFullTime - element.awayGoalFullTime
          );
          if (winner === item.name) {
            this._table[tIndex].increasePoint(3);
          }
          if (winner === "draw") {
            this._table[tIndex].increasePoint(1);
          }
        }
        if (item.name == element.awayTeamName) {
          awayTeamUpdated = true;
          // Adjust the existing data in the _table for awayTeam
          this._table[tIndex].increaseMatchPlayed();
          this._table[tIndex].changeGoalDifference(
            element.awayGoalFullTime - element.homeGoalFullTime
          );
          if (winner === item.name) {
            this._table[tIndex].increasePoint(3);
          }
          if (winner === "draw") {
            this._table[tIndex].increasePoint(1);
          }
        }
      });

      if (!homeTeamUpdated) {
        // Create new homeTeam Team and push it to the table
        let homeTeam = new Team(element.homeTeamName);
        homeTeam.increaseMatchPlayed();
        homeTeam.changeGoalDifference(
          element.homeGoalFullTime - element.awayGoalFullTime
        );
        if (winner === element.homeTeamName) {
          homeTeam.increasePoint(3);
        }
        if (winner === "draw") {
          homeTeam.increasePoint(1);
        }

        this._table.push(homeTeam);
      }

      if (!awayTeamUpdated) {
        // Create new awayTeam Team and push it to the table
        let awayTeam = new Team(element.awayTeamName);
        awayTeam.increaseMatchPlayed();
        awayTeam.changeGoalDifference(
          element.awayGoalFullTime - element.homeGoalFullTime
        );
        if (winner === element.awayTeamName) {
          awayTeam.increasePoint(3);
        }
        if (winner === "draw") {
          awayTeam.increasePoint(1);
        }
        this._table.push(awayTeam);
      }
    });
    // And finally sort the table, first sort using point and than using goalDifference
    this._table.sort((a, b) => (a.points < b.points ? 1 : -1));
    this._table.sort((a, b) => (a.goalDifference < b.goalDifference ? 1 : -1));
    return this._table;
  }

  public displayTable(): Array<Team> {
    this._table.forEach((item, index) => {
      if (index === 0) {
        console.log("Full time table.");
        console.log(
          "-------------------------------------------------------------------------------------------------------------------------------"
        );
        console.log(
          "Position\t\t\tName\t\t\tMatch Played\t\t\tPoints\t\t\tGoal Difference"
        );
        console.log(
          "-------------------------------------------------------------------------------------------------------------------------------"
        );
      }
      console.log(
        `${index + 1}\t\t\t\t${item.name}\t\t\t${item.matchPlayed}\t\t\t${
          item.points
        }\t\t\t${item.goalDifference}`
      );
    });
    return this._table;
  }

  public generateTableHalfTime(): Array<Team> {
    this._gameList.games.forEach((element, glIndex) => {
      // Initialize variable for flagging of data process
      let homeTeamUpdated: boolean = false;
      let awayTeamUpdated: boolean = false;

      // Initialize variable for name of winner or draw
      let winner: string = "";
      // set data for the winner variable
      if (element.homeGoalHalfTime > element.awayGoalsHalfTime) {
        winner = element.homeTeamName;
      } else if (element.homeGoalHalfTime < element.awayGoalsHalfTime) {
        winner = element.awayTeamName;
      } else {
        winner = "draw";
      }

      // Data for Team
      // points, name, matchPlayed, goalDifference
      this._halfTable.filter((item, tIndex) => {
        if (item.name == element.homeTeamName) {
          homeTeamUpdated = true;
          // Adjust the existing data in the _table for homeTeam
          this._halfTable[tIndex].increaseMatchPlayed();
          this._halfTable[tIndex].changeGoalDifference(
            element.homeGoalHalfTime - element.awayGoalsHalfTime
          );
          if (winner === item.name) {
            this._halfTable[tIndex].increasePoint(3);
          }
          if (winner === "draw") {
            this._halfTable[tIndex].increasePoint(1);
          }
        }
        if (item.name == element.awayTeamName) {
          awayTeamUpdated = true;
          // Adjust the existing data in the _halfTable for awayTeam
          this._halfTable[tIndex].increaseMatchPlayed();
          this._halfTable[tIndex].changeGoalDifference(
            element.awayGoalsHalfTime - element.homeGoalHalfTime
          );
          if (winner === item.name) {
            this._halfTable[tIndex].increasePoint(3);
          }
          if (winner === "draw") {
            this._halfTable[tIndex].increasePoint(1);
          }
        }
      });

      if (!homeTeamUpdated) {
        // Create new homeTeam Team and push it to the table
        let homeTeam = new Team(element.homeTeamName);
        homeTeam.increaseMatchPlayed();
        homeTeam.changeGoalDifference(
          element.homeGoalHalfTime - element.awayGoalsHalfTime
        );
        if (winner === element.homeTeamName) {
          homeTeam.increasePoint(3);
        }
        if (winner === "draw") {
          homeTeam.increasePoint(1);
        }

        this._halfTable.push(homeTeam);
      }

      if (!awayTeamUpdated) {
        // Create new awayTeam Team and push it to the table
        let awayTeam = new Team(element.awayTeamName);
        awayTeam.increaseMatchPlayed();
        awayTeam.changeGoalDifference(
          element.awayGoalsHalfTime - element.homeGoalHalfTime
        );
        if (winner === element.awayTeamName) {
          awayTeam.increasePoint(3);
        }
        if (winner === "draw") {
          awayTeam.increasePoint(1);
        }
        this._halfTable.push(awayTeam);
      }
    });
    // And finally sort the table, first sort using point and than using goalDifference
    this._halfTable.sort((a, b) => (a.points < b.points ? 1 : -1));
    this._halfTable.sort((a, b) =>
      a.goalDifference < b.goalDifference ? 1 : -1
    );
    return this._halfTable;
  }

  public displayHalfTable(): Array<Team> {
    this._halfTable.forEach((item, index) => {
      if (index === 0) {
        console.log();
        console.log();
        console.log("Half time table.");
        console.log(
          "-------------------------------------------------------------------------------------------------------------------------------"
        );
        console.log(
          "Position\t\t\tName\t\t\tMatch Played\t\t\tPoints\t\t\tGoal Difference"
        );
        console.log(
          "-------------------------------------------------------------------------------------------------------------------------------"
        );
      }
      console.log(
        `${index + 1}\t\t\t\t${item.name}\t\t\t${item.matchPlayed}\t\t\t${
          item.points
        }\t\t\t${item.goalDifference}`
      );
    });
    return this._halfTable;
  }
}
