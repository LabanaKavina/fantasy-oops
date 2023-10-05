"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kabaddi = void 0;
class Kabaddi {
    constructor(team1, team2) {
        this.raiderTeam = team1;
        this.defenderTeam = team2;
    }
    toss() {
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
    getTossWinnerTeam() {
        return this.raiderTeam;
    }
    getTossLoserTeam() {
        return this.defenderTeam;
    }
    getWinner() {
        // let winner: Team = this.raiderTeam.getFantasyPoints() > this.defenderTeam.getFantasyPoints() ? this.raiderTeam : this.defenderTeam;
        // return console.log(winner.getName(), 'has won the match');
    }
}
exports.Kabaddi = Kabaddi;
