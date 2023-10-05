import { CricketTeam } from "./cricket/cricketTeam";
import { ITeam } from "./match";

export class Score {
  constructor(public team: CricketTeam) {}

  getScore(): void {
    let teamScore = `${this.team.getName()}  -- ${this.team.getRuns()}/${this.team.getWickets()}   --  Balls -- ${this.team.getBalls()} -- Fantasy points - ${this.team.getFantasyPoints()}`;
    console.log(teamScore);
    console.log();

    this.team.getPlayers().map((player, index) => {
      console.log(
        "------------------------------------------------------------------"
      );
      console.log(
        `${
          index + 1
        }  ${player.getName()} -- runs - ${player.getRuns()} -- balls - ${player.getBalls()} -- wickets - ${player.getWicket()} -- fantasy points - ${player.getFantasyPoints()}`
      );
    });
    console.log();
    console.log(
      "=========================================================================="
    );
    console.log();
  }
}
