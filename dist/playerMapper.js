"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMapper = void 0;
const player_1 = require("./player");
class PlayerMapper {
    static toDomain(player) {
        return new player_1.Player(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.PlayerMapper = PlayerMapper;
