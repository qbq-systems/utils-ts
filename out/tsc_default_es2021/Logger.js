"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
class Logger {
    constructor() {
        this.hideT = false;
        this.hideU = false;
        this.prefix = [];
        this.transport = console.log;
    }
    addPrefix(p) {
        this.prefix.push(p);
        return this;
    }
    hideType() {
        this.hideT = true;
        return this;
    }
    hideUTC() {
        this.hideU = true;
        return this;
    }
    info(...m) {
        this.process('info', m);
    }
    process(type, m) {
        this.transport(this.hideU ? '' : (0, time_1.utc)(), this.hideT ? '' : `[${type}]`, this.prefix.length > 0 ? `[${this.prefix.join('|')}]` : '', m.join(' '));
    }
    setPrefix(...p) {
        this.prefix = p;
        return this;
    }
    setTransport(t) {
        this.transport = t;
        return this;
    }
}
exports.default = Logger;
//# sourceMappingURL=Logger.js.map