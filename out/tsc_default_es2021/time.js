"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utc = exports.sleepSeconds = exports.sleepMinutes = exports.sleepMilliseconds = exports.iso = exports.gmtDateToYYYYMMDD = void 0;
/**
 * Convert `Nov 14 12:01:22 2023 GMT` to `2023-11-14`
 *
 * @param g
 */
const gmtDateToYYYYMMDD = (g) => {
    const dateObj = new Date(g);
    const year = dateObj.getUTCFullYear();
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};
exports.gmtDateToYYYYMMDD = gmtDateToYYYYMMDD;
const iso = () => {
    return new Date().toISOString();
};
exports.iso = iso;
const sleepMilliseconds = async (d) => {
    await new Promise((resolve) => setTimeout(() => {
        resolve(true);
    }, d));
};
exports.sleepMilliseconds = sleepMilliseconds;
const sleepMinutes = async (d) => {
    await (0, exports.sleepSeconds)(d * 60);
};
exports.sleepMinutes = sleepMinutes;
const sleepSeconds = async (d) => {
    await (0, exports.sleepMilliseconds)(d * 1000);
};
exports.sleepSeconds = sleepSeconds;
const utc = () => {
    return new Date().toUTCString();
};
exports.utc = utc;
//# sourceMappingURL=time.js.map