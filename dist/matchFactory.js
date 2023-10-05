"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchFactory = void 0;
const cricket_1 = require("./cricket/cricket");
const cricketTeam_1 = require("./cricket/cricketTeam");
const kabaddi_1 = require("./kabaddi/kabaddi");
const kabaddiTeam_1 = require("./kabaddi/kabaddiTeam");
class MatchFactory {
    createMatch(matchType, name1, name2) {
        if (matchType == 1) {
            return new cricket_1.Cricket(new cricketTeam_1.CricketTeam(name1), new cricketTeam_1.CricketTeam(name2));
        }
        else {
            return new kabaddi_1.Kabaddi(new kabaddiTeam_1.KabaddiTeam(name1), new kabaddiTeam_1.KabaddiTeam(name2));
        }
    }
}
exports.MatchFactory = MatchFactory;
