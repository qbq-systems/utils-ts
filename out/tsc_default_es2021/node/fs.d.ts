import type { TFile } from "./fs/types/TFile";
export declare const exists: (p: string) => boolean;
export declare const existsOrError: (path: string) => boolean;
export declare const isFile: (path: string) => boolean;
export declare const readAllFiles: (path: string) => TFile[];
export declare const readAsJSON: (p: string) => unknown;
export declare const readAsString: (p: string) => string;
//# sourceMappingURL=fs.d.ts.map