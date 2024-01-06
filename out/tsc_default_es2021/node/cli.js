"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ask = void 0;
const node_readline_1 = __importDefault(require("node:readline"));
const node_process_1 = __importDefault(require("node:process"));
const ask = async (p) => {
    const r = node_readline_1.default.createInterface({
        input: node_process_1.default.stdin,
        output: node_process_1.default.stdout,
    });
    let res = '';
    while (res === '') {
        res = await new Promise((resolve) => {
            r.question(`${p}`, (a) => {
                resolve(a.trim());
            });
        });
    }
    r.close();
    return res;
};
exports.ask = ask;
//# sourceMappingURL=cli.js.map