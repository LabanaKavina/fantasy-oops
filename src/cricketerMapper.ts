import { Cricketer } from "./cricketer";

export class CricketerMapper {
  static toDomain(player: any): Cricketer {
    return new Cricketer(
      player.id,
      player.name,
      player.playingRole,
      player.credit
    );
  }
}
