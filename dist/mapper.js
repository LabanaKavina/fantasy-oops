"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMapper = void 0;
const player_1 = __importDefault(require("./player"));
class PlayerMapper {
    toDomain(player) {
        return new player_1.default(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.PlayerMapper = PlayerMapper;
