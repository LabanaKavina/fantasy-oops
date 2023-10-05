import { Match, ITeam } from "../match";
// import { Team } from "../team";

export class Kabaddi implements Match {
  raiderTeam: ITeam;
  defenderTeam: ITeam;

  constructor(team1: ITeam, team2: ITeam) {
    this.raiderTeam = team1;
    this.defenderTeam = team2;
  }

  toss(): void {
    let random = Math.floor(Math.random() * 2);
    if (random == 1) {
      let temp = this.raiderTeam;
      this.raiderTeam = this.defenderTeam;
      this.defenderTeam = temp;
    }
    console.log("kabaddi");
  }
  // getraiderTeam(): Team {
  //     return this.raiderTeam;
  // }

  // getbowlingTeam(): Team {
  //     return this.bowlingTeam;
  // }

  getTossWinnerTeam(): ITeam {
    return this.raiderTeam;
  }

  getTossLoserTeam(): ITeam {
    return this.defenderTeam;
  }
  getWinner(): void {
    // let winner: Team = this.raiderTeam.getFantasyPoints() > this.defenderTeam.getFantasyPoints() ? this.raiderTeam : this.defenderTeam;
    // return console.log(winner.getName(), 'has won the match');
  }
}
