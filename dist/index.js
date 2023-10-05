"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketerMapper_1 = require("./cricketerMapper");
const playersData_1 = require("./playersData");
const cricket_1 = require("./cricket/cricket");
const tossDecider_1 = require("./tossDecider");
const cricketTeam_1 = require("./cricket/cricketTeam");
const matchFactory_1 = require("./matchFactory");
const score_1 = require("./score");
const prompt = require("prompt-sync")();
let matchType = +prompt("What do you like to play ? 1) Cricket 2) kabaddi");
let name1 = prompt("Enter 1st team name");
let name2 = prompt("Enter 2nd team name");
let match;
let playersArray = [];
let matchFactory = new matchFactory_1.MatchFactory();
match = matchFactory.createMatch(matchType, name1, name2);
const tossDecider = new tossDecider_1.TossDecider();
tossDecider.toss(match);
let team1 = tossDecider.getTossWinnerTeam(match);
let team2 = tossDecider.getTossLoserTeam(match);
playersArray = playersData_1.playersData.map((player) => {
    return cricketerMapper_1.CricketerMapper.toDomain(player);
});
let players = playersArray.slice(0, 11);
team1.addPlayer(players);
let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);
if (match instanceof cricket_1.Cricket) {
    // team1.setCaptain(players[0]);
    // team1.setViceCaptain(players[1]);
    match.setOvers(20);
    match.startGame();
    match.changeInnings();
}
console.log();
match.getWinner();
console.log();
if (team1 instanceof cricketTeam_1.CricketTeam && team2 instanceof cricketTeam_1.CricketTeam) {
    let team1Score = new score_1.Score(team1);
    team1Score.getScore();
    let team2Score = new score_1.Score(team2);
    team2Score.getScore();
}
