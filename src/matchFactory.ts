import { Cricket } from "./cricket/cricket";
import { CricketTeam } from "./cricket/cricketTeam";
import { Kabaddi } from "./kabaddi/kabaddi";
import { KabaddiTeam } from "./kabaddi/kabaddiTeam";

export class MatchFactory {
  createMatch(
    matchType: number,
    name1: string,
    name2: string
  ): Cricket | Kabaddi {
    if (matchType == 1) {
      return new Cricket(new CricketTeam(name1), new CricketTeam(name2));
    } else {
      return new Kabaddi(new KabaddiTeam(name1), new KabaddiTeam(name2));
    }
  }
}
