import { Match, ITeam } from "./match";

export class TossDecider {
  toss(match: Match) {
    match.toss();
  }

  getTossWinnerTeam(match: Match): ITeam {
    return match.getTossWinnerTeam();
  }
  getTossLoserTeam(match: Match): ITeam {
    return match.getTossLoserTeam();
  }
  getWinner(): void {}
}
