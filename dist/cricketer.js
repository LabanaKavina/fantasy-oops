"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricketer = void 0;
const player_1 = require("./player");
class Cricketer extends player_1.Player {
    constructor(id, name, role, credit) {
        super(id, name, role, credit);
        this.runs = 0;
        this.balls = 0;
        this.isCaptain = false;
        this.isViceCaptain = false;
        this.isBat = false;
        this.over = 0;
        this.wicket = 0;
    }
    addWickets() {
        this.wicket += 1;
    }
    getWicket() {
        return this.wicket;
    }
    setIsCaptain() {
        this.isCaptain = true;
    }
    setIsViceCaptain() {
        this.isViceCaptain = true;
    }
    getIsCaptain() {
        return this.isCaptain;
    }
    getIsViceCaptain() {
        return this.isViceCaptain;
    }
    addRuns(runs) {
        this.runs += runs;
    }
    getRuns() {
        return this.runs;
    }
    addBalls() {
        this.balls += 1;
    }
    getBalls() {
        return this.balls;
    }
    setIsBat() {
        this.isBat = true;
    }
    addOver() {
        this.over += 1;
    }
    getIsBat() {
        return this.isBat;
    }
    getOver() {
        return this.over;
    }
}
exports.Cricketer = Cricketer;
