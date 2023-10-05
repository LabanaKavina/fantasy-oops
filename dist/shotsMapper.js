"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShotMapper = void 0;
const shot_1 = require("./shot");
class ShotMapper {
    static toDomain({ name, point, runs, }) {
        return new shot_1.Shot(name, point, runs);
    }
}
exports.ShotMapper = ShotMapper;
