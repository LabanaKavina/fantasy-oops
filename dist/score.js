"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
class Score {
    constructor(team) {
        this.team = team;
    }
    getScore() {
        let teamScore = `${this.team.getName()}  -- ${this.team.getRuns()}/${this.team.getWickets()}   --  Balls -- ${this.team.getBalls()} -- Fantasy points - ${this.team.getFantasyPoints()}`;
        console.log(teamScore);
        console.log();
        this.team.getPlayers().map((player, index) => {
            console.log("------------------------------------------------------------------");
            console.log(`${index + 1}  ${player.getName()} -- runs - ${player.getRuns()} -- balls - ${player.getBalls()} -- wickets - ${player.getWicket()} -- fantasy points - ${player.getFantasyPoints()}`);
        });
        console.log();
        console.log("==========================================================================");
        console.log();
    }
}
exports.Score = Score;
