"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Once = void 0;
const generate_1 = require("./generate");
const Once = () => {
    return (0, generate_1.generate)((fn) => {
        let ready = false;
        let result;
        return function (...args) {
            if (ready) {
                return result;
            }
            ready = true;
            // @ts-ignore
            result = fn.apply(this, args);
            return result;
        };
    });
};
exports.Once = Once;
//# sourceMappingURL=once.js.map