"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = exports.rand = exports.math = exports.Logger = exports.json = exports.dev = exports.node = exports.decorators = void 0;
exports.decorators = __importStar(require("./decorators"));
exports.node = __importStar(require("./node"));
exports.dev = __importStar(require("./dev"));
exports.json = __importStar(require("./json"));
var Logger_1 = require("./Logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return __importDefault(Logger_1).default; } });
exports.math = __importStar(require("./math"));
exports.rand = __importStar(require("./rand"));
exports.time = __importStar(require("./time"));
//# sourceMappingURL=index.js.map