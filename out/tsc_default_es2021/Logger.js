"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    info(...m) {
        this.process('info', m);
    }
    process(type, m) {
        console.log(`[${type}]`, m.join(' '));
    }
}
exports.default = Logger;
//# sourceMappingURL=Logger.js.map