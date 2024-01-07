"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
class Logger {
    constructor() {
        this.prefix = [];
        this.useUTC = true;
    }
    addPrefix(p) {
        this.prefix.push(p);
        return this;
    }
    info(...m) {
        this.process('info', m);
    }
    process(type, m) {
        console.log(this.useUTC ? (0, time_1.utc)() : '', `[${type}]`, this.prefix.length > 0 ? `[${this.prefix.join('/')}]` : '', m.join(' '));
    }
    setPrefix(...p) {
        this.prefix = p;
        return this;
    }
}
exports.default = Logger;
//# sourceMappingURL=Logger.js.map