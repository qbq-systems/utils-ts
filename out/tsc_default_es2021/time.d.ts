export declare const currentDate: () => string;
export declare const currentDateTime: () => string;
export declare const currentTime: () => string;
/**
 * Calculation of the number of days between two dates in the format `YYYYY-MM-DD`
 *
 * @param from
 * @param to
 */
export declare const daysBetweenTwoDates: (from: string, to: string) => number;
/**
 * Convert `Nov 14 12:01:22 2023 GMT` to `2023-11-14`
 *
 * @param g
 */
export declare const gmtDateToYYYYMMDD: (g: string) => string;
export declare const iso: () => string;
export declare const sleepMilliseconds: (d: number) => Promise<void>;
export declare const sleepMinutes: (d: number) => Promise<void>;
export declare const sleepSeconds: (d: number) => Promise<void>;
export declare const utc: () => string;
//# sourceMappingURL=time.d.ts.map