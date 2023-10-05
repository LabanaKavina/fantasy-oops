"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricket = void 0;
const shot_1 = require("../shot");
class Cricket {
    constructor(team1, team2) {
        this.overs = 0;
        if (team1.getName() == team2.getName()) {
            throw new Error("Both team names are same");
        }
        this.battingTeam = team1;
        this.bowlingTeam = team2;
    }
    toss() {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
        }
        console.log(`Congratulations ${this.battingTeam.getName()} have won the toss`);
    }
    hit() {
        if (this.battingTeam.getWickets() == 10) {
            return;
        }
        this.currentBatsman.addBalls();
        this.bowlingTeam.addBalls();
        this.updateOver();
        let shot = shot_1.Shot.shots();
        this.addBowlingData(shot);
        this.addBattingData(shot);
    }
    updateOver() {
        if (this.bowlingTeam.getBalls() % 6 == 0) {
            this.bowlingTeam.addOvers();
            if (this.bowlingTeam.getOvers() == this.overs) {
                return;
            }
            if (this.currentBowler.getOver() == this.overs / 5) {
                this.changeBowler();
            }
            else {
                this.currentBowler.addOver();
            }
        }
    }
    addBowlingData(shot) {
        let fantasyPoints = this.countFantsayPoints(this.currentBowler, shot);
        if (shot.getName() == "Wicket") {
            if (this.currentBatsman.getRuns() == 0) {
                this.currentBatsman.addFantasyPoints(-2);
            }
            this.changeBatsman();
            this.battingTeam.addWickets();
            this.currentBowler.addWickets();
            this.currentBowler.addFantasyPoints(fantasyPoints);
        }
        else if (shot.getName() == "DotBall") {
            this.currentBowler.addFantasyPoints(fantasyPoints);
        }
    }
    countFantsayPoints(player, shot) {
        return player.getIsCaptain()
            ? shot.getPoint() * 2
            : player.getIsViceCaptain()
                ? shot.getPoint() * 1.5
                : shot.getPoint();
    }
    addBattingData(shot) {
        if (shot.getName() != "Wicket" && shot.getName() != "DotBall") {
            let fantasyPoints = this.countFantsayPoints(this.currentBatsman, shot);
            this.currentBatsman.addRuns(shot.getRuns());
            this.currentBatsman.addFantasyPoints(fantasyPoints);
        }
    }
    changeBatsman() {
        this.currentBatsman = this.battingTeam.getBatsman();
        if (this.currentBatsman) {
            this.currentBatsman.setIsBat();
        }
    }
    changeBowler() {
        this.currentBowler = this.bowlingTeam.getBowler();
    }
    getCurrentBatsman() {
        return this.currentBatsman;
    }
    getCurrentBowler() {
        return this.currentBowler;
    }
    setOvers(over) {
        this.overs = over;
    }
    getOvers() {
        return this.overs;
    }
    autoPlay() {
        for (let i = 1; i <= this.overs * 6; i++) {
            this.hit();
        }
    }
    startGame() {
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
    getbattingTeam() {
        return this.battingTeam;
    }
    getbowlingTeam() {
        return this.bowlingTeam;
    }
    getTossWinnerTeam() {
        return this.battingTeam;
    }
    getTossLoserTeam() {
        return this.bowlingTeam;
    }
    getWinner() {
        let winner = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints()
            ? this.battingTeam
            : this.bowlingTeam;
        return console.log(winner.getName(), "has won the match");
    }
}
exports.Cricket = Cricket;
