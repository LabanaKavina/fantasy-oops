import { Cricketer } from "../cricketer";
import { Shot } from "../shot";
import { CricketTeam } from "./cricketTeam";
import { ITeam, Match } from "../match";
import { Player } from "../player";

export class Cricket implements Match {
  private battingTeam!: CricketTeam;
  private bowlingTeam!: CricketTeam;
  private currentBatsman!: Cricketer;
  private currentBowler!: Cricketer;
  private overs: number = 0;

  constructor(team1: CricketTeam, team2: CricketTeam) {
    if (team1.getName() == team2.getName()) {
      throw new Error("Both team names are same");
    }
    this.battingTeam = team1;
    this.bowlingTeam = team2;
  }

  toss(): void {
    let random = Math.floor(Math.random() * 2);
    if (random == 1) {
      let temp = this.battingTeam;
      this.battingTeam = this.bowlingTeam;
      this.bowlingTeam = temp;
    }
    console.log(
      `Congratulations ${this.battingTeam.getName()} have won the toss`
    );
  }

  hit(): void {
    if (this.battingTeam.getWickets() == 10) {
      return;
    }
    this.currentBatsman.addBalls();
    this.bowlingTeam.addBalls();
    this.updateOver();
    let shot = Shot.shots();
    this.addBowlingData(shot);
    this.addBattingData(shot);
  }

  updateOver(): void {
    if (this.bowlingTeam.getBalls() % 6 == 0) {
      this.bowlingTeam.addOvers();
      if (this.bowlingTeam.getOvers() == this.overs) {
        return;
      }
      if (this.currentBowler.getOver() == this.overs / 5) {
        this.changeBowler();
      } else {
        this.currentBowler.addOver();
      }
    }
  }
  addBowlingData(shot: Shot): void {
    let fantasyPoints = this.countFantsayPoints(this.currentBowler, shot);

    if (shot.getName() == "Wicket") {
      if (this.currentBatsman.getRuns() == 0) {
        this.currentBatsman.addFantasyPoints(-2);
      }
      this.changeBatsman();
      this.battingTeam.addWickets();
      this.currentBowler.addWickets();
      this.currentBowler.addFantasyPoints(fantasyPoints);
    } else if (shot.getName() == "DotBall") {
      this.currentBowler.addFantasyPoints(fantasyPoints);
    }
  }

  countFantsayPoints(player: Cricketer, shot: Shot): number {
    return player.getIsCaptain()
      ? shot.getPoint() * 2
      : player.getIsViceCaptain()
      ? shot.getPoint() * 1.5
      : shot.getPoint();
  }

  addBattingData(shot: Shot): void {
    if (shot.getName() != "Wicket" && shot.getName() != "DotBall") {
      let fantasyPoints = this.countFantsayPoints(this.currentBatsman, shot);
      this.currentBatsman.addRuns(shot.getRuns());
      this.currentBatsman.addFantasyPoints(fantasyPoints);
    }
  }

  changeBatsman(): void {
    this.currentBatsman = this.battingTeam.getBatsman();

    if (this.currentBatsman) {
      this.currentBatsman.setIsBat();
    }
  }

  changeBowler(): void {
    this.currentBowler = this.bowlingTeam.getBowler();
  }

  getCurrentBatsman(): Player {
    return this.currentBatsman;
  }

  getCurrentBowler(): Player {
    return this.currentBowler;
  }
  setOvers(over: number) {
    this.overs = over;
  }
  getOvers(): number {
    return this.overs;
  }
  autoPlay() {
    for (let i = 1; i <= this.overs * 6; i++) {
      this.hit();
    }
  }
  startGame(): void {
    this.battingTeam = this.getbattingTeam();
    this.bowlingTeam = this.getbowlingTeam();
    this.changeBatsman();
    this.changeBowler();
    this.autoPlay();
  }
  changeInnings() {
    let temp = this.battingTeam;
    this.battingTeam = this.getbowlingTeam();
    this.bowlingTeam = temp;
    this.changeBatsman();
    this.changeBowler();
    this.autoPlay();
  }
  getbattingTeam(): CricketTeam {
    return this.battingTeam;
  }

  getbowlingTeam(): CricketTeam {
    return this.bowlingTeam;
  }

  getTossWinnerTeam(): ITeam {
    return this.battingTeam;
  }

  getTossLoserTeam(): ITeam {
    return this.bowlingTeam;
  }
  getWinner() {
    let winner: CricketTeam =
      this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints()
        ? this.battingTeam
        : this.bowlingTeam;
    return console.log(winner.getName(), "has won the match");
  }
}
