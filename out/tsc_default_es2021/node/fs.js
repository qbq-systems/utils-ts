"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAsString = exports.readAsJSON = exports.exists = void 0;
const node_fs_1 = require("node:fs");
const exists = (p) => {
    try {
        (0, node_fs_1.accessSync)(p);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.exists = exists;
const readAsJSON = (p) => {
    try {
        return JSON.parse((0, exports.readAsString)(p));
    }
    catch (e) {
        return null;
    }
};
exports.readAsJSON = readAsJSON;
const readAsString = (p) => {
    return (0, node_fs_1.readFileSync)(p, {
        encoding: 'utf-8',
    });
};
exports.readAsString = readAsString;
//# sourceMappingURL=fs.js.map