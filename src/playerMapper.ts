import { Player } from "./player";

export class PlayerMapper {
  static toDomain(player: any): Player {
    return new Player(
      player.id,
      player.name,
      player.playingRole,
      player.credit
    );
  }
}
