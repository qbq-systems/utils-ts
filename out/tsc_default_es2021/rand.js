"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = exports.int = void 0;
const int = (f = 1, t = 100) => {
    return Math.floor(Math.random() * (t - f + 1) + f);
};
exports.int = int;
const string = (length = 32) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.string = string;
//# sourceMappingURL=rand.js.map