"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.md5 = void 0;
const node_crypto_1 = require("node:crypto");
const md5 = (s) => {
    return (0, node_crypto_1.createHash)('md5')
        .update(s)
        .digest('hex');
};
exports.md5 = md5;
//# sourceMappingURL=crypto.js.map