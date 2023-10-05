import { ITeam } from "../match";
import { Player } from "../player";

export class KabaddiTeam implements ITeam {
  private players: Player[] = [];

  constructor(private name: string) {}

  addPlayer(players: Player[]): void {
    this.players = players;
  }

  getPlayers(): Player[] {
    return this.players;
  }
  removePlayer(id: number): void {
    let playerIndex = this.players.findIndex((player) => player.getId() == id);
    if (playerIndex == -1) {
      throw new Error("Player is not in team");
    }
    this.players.splice(playerIndex, 1);
  }
}
