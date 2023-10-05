import { CricketerMapper } from "./cricketerMapper";
import { Match, ITeam } from "./match";
import { playersData } from "./playersData";
import { Cricket } from "./cricket/cricket";
import { Kabaddi } from "./kabaddi/kabaddi";
import { TossDecider } from "./tossDecider";
import { Player } from "./player";
import { CricketTeam } from "./cricket/cricketTeam";
import { KabaddiTeam } from "./kabaddi/kabaddiTeam";
import { MatchFactory } from "./matchFactory";
import { Score } from "./score";

const prompt = require("prompt-sync")();

let matchType: number = +prompt(
  "What do you like to play ? 1) Cricket 2) kabaddi"
);

let name1: string = prompt("Enter 1st team name");
let name2: string = prompt("Enter 2nd team name");

let match;
let playersArray: Player[] = [];
let matchFactory = new MatchFactory();
match = matchFactory.createMatch(matchType, name1, name2);

const tossDecider = new TossDecider();
tossDecider.toss(match);

let team1 = tossDecider.getTossWinnerTeam(match);
let team2 = tossDecider.getTossLoserTeam(match);

playersArray = playersData.map((player) => {
  return CricketerMapper.toDomain(player);
});

let players = playersArray.slice(0, 11);
team1.addPlayer(players);
let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);

if (match instanceof Cricket) {
  // team1.setCaptain(players[0]);
  // team1.setViceCaptain(players[1]);
  match.setOvers(20);
  match.startGame();
  match.changeInnings();
}

console.log();
match.getWinner();
console.log();

if (team1 instanceof CricketTeam && team2 instanceof CricketTeam) {
  let team1Score = new Score(team1);
  team1Score.getScore();
  let team2Score = new Score(team2);
  team2Score.getScore();
}
