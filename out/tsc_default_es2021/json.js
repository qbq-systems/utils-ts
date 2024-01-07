"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pretty = void 0;
const pretty = (o) => {
    try {
        return JSON.stringify(o, null, 4);
    }
    catch (e) {
        return null;
    }
};
exports.pretty = pretty;
//# sourceMappingURL=json.js.map