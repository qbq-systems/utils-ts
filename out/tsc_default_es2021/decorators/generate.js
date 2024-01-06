"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const generate = (fn) => {
    return (target, key, descr, ...args) => {
        if (descr.value !== null) {
            descr.value = fn(descr.value, ...args);
        }
        else if (descr.get !== null) {
            descr.get = fn(descr.get, ...args);
        }
        else {
            throw 'Unsupported mode';
        }
    };
};
exports.generate = generate;
//# sourceMappingURL=generate.js.map