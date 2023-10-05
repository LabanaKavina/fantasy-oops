"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KabaddiTeam = void 0;
class KabaddiTeam {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
    addPlayer(players) {
        this.players = players;
    }
    getPlayers() {
        return this.players;
    }
    removePlayer(id) {
        let playerIndex = this.players.findIndex((player) => player.getId() == id);
        if (playerIndex == -1) {
            throw new Error("Player is not in team");
        }
        this.players.splice(playerIndex, 1);
    }
}
exports.KabaddiTeam = KabaddiTeam;
