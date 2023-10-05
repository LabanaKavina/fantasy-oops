"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CricketerMapper = void 0;
const cricketer_1 = require("./cricketer");
class CricketerMapper {
    static toDomain(player) {
        return new cricketer_1.Cricketer(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.CricketerMapper = CricketerMapper;
