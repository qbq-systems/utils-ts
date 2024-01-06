"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todo = exports.panic = void 0;
const panic = (m) => {
    if (console) {
        console.log(`PANIC: ${m}`);
    }
    throw new Error('PANIC');
};
exports.panic = panic;
const todo = () => {
    (0, exports.panic)('TODO');
};
exports.todo = todo;
//# sourceMappingURL=dev.js.map