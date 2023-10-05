"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TossDecider = void 0;
class TossDecider {
    toss(match) {
        match.toss();
    }
    getTossWinnerTeam(match) {
        return match.getTossWinnerTeam();
    }
    getTossLoserTeam(match) {
        return match.getTossLoserTeam();
    }
    getWinner() { }
}
exports.TossDecider = TossDecider;
