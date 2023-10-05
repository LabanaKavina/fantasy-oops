"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const shot_1 = require("./shot");
class Game {
    constructor(battingTeam, bowlingTeam) {
        this.battingTeam = battingTeam;
        this.bowlingTeam = bowlingTeam;
        this.changeBatsman();
        this.changeBowler();
    }
    hit() {
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
            if (this.bowlingTeam.getOvers() == 5) {
                return;
            }
            this.changeBowler();
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
        this.currentBatsman.setIsBat();
    }
    changeBowler() {
        this.currentBowler = this.bowlingTeam.getBowler();
        this.currentBowler.setIsBowl();
    }
}
exports.Game = Game;
