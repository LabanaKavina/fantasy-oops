// import { Team } from "./team";

import { Player } from "./player";

export interface Match {
  toss(): void;
  getTossWinnerTeam(): ITeam;
  getTossLoserTeam(): ITeam;
  getWinner(): void;
}

export interface ITeam {
  addPlayer(players: Player[]): void;
  removePlayer(id: number): void;
}

// export class Match {
//   private homeTeam: Team;
//   private opponentTeam: Team;
//   // public innings!: Game;
//   // private overs! : number;

//   constructor(team1: Team, team2: Team) {
//     if (team1.name == team2.name) {
//       throw new Error("Both team names are same");
//     }
//     this.homeTeam = team1;
//     this.opponentTeam = team2;
//   }

//   toss(): void {
//     let random = Math.floor(Math.random() * 2);
//     if (random == 1) {
//       let temp = this.homeTeam;
//       this.homeTeam = this.opponentTeam;
//       this.opponentTeam = temp;
//     }
//   }
//   // setOvers(over: number): void {
//   //     this.overs = over
//   // }
//   getHomeTeam(): Team {
//     return this.homeTeam;
//   }

//   getOpponentTeam(): Team {
//     return this.opponentTeam;
//   }

//   getTossWinnerTeam(): Team {
//     return this.homeTeam;
//   }

//   getTossLoserTeam(): Team {
//     return this.opponentTeam;
//   }
//   // autoPlay(){
//   //     for (let i = 1; i <= this.overs * 6; i++) {
//   //         this.innings.hit();
//   //     }
//   // }
//   // startGame(): void {
//   //     this.innings = new Game(this.homeTeam , this.opponentTeam);
//   //     this.innings.setOvers(this.overs);
//   //     this.autoPlay()
//   // }
//   // changeInnings(){
//   //     this.innings = new Game(this.opponentTeam , this.homeTeam);
//   //     this.innings.setOvers(this.overs);
//   //     this.autoPlay()

//   // }
//   getWinner() {
//     let winner: Team =
//       this.homeTeam.getFantasyPoints() > this.opponentTeam.getFantasyPoints()
//         ? this.homeTeam
//         : this.opponentTeam;
//     return console.log(winner.getName(), "has won the match");
//   }
// }
