"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utc = exports.sleepSeconds = exports.sleepMinutes = exports.sleepMilliseconds = exports.iso = exports.gmtDateToYYYYMMDD = exports.daysBetweenTwoDates = exports.currentTime = exports.currentDateTime = exports.currentDate = void 0;
const currentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};
exports.currentDate = currentDate;
const currentDateTime = () => {
    return `${(0, exports.currentDate)()} ${(0, exports.currentTime)()}`;
};
exports.currentDateTime = currentDateTime;
const currentTime = () => {
    const date = new Date();
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
};
exports.currentTime = currentTime;
/**
 * Calculation of the number of days between two dates in the format `YYYYY-MM-DD`
 *
 * @param from
 * @param to
 */
const daysBetweenTwoDates = (from, to) => {
    const fromList = from.split('-');
    const toList = to.split('-');
    return Math.round(Math.abs((new Date(parseInt(fromList[0], 10), parseInt(fromList[1], 10), parseInt(fromList[2], 10)).getTime() - new Date(parseInt(toList[0], 10), parseInt(toList[1], 10), parseInt(toList[2], 10)).getTime()) / 86400000));
};
exports.daysBetweenTwoDates = daysBetweenTwoDates;
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