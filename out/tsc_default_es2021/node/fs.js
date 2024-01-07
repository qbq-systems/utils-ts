"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAsString = exports.readAsJSON = exports.readAllFiles = exports.isFile = exports.existsOrError = exports.exists = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
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
const existsOrError = (path) => {
    if (!(0, exports.exists)(path)) {
        throw new Error('File not exists');
    }
    return true;
};
exports.existsOrError = existsOrError;
const isFile = (path) => {
    return (0, node_fs_1.statSync)(path).isFile();
};
exports.isFile = isFile;
const readAllFiles = (path) => {
    (0, exports.existsOrError)(path);
    const data = [];
    (0, node_fs_1.readdirSync)(path).forEach((file) => {
        const fullPath = (0, node_path_1.join)(path, file);
        if (!(0, exports.isFile)(fullPath)) {
            return;
        }
        data.push({
            body: (0, exports.readAsString)(fullPath),
            name: file,
            path: fullPath,
            status: 'OK',
        });
    });
    return data;
};
exports.readAllFiles = readAllFiles;
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