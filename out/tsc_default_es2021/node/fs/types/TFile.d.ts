/// <reference types="node" />
import { TFileStatus } from "./TFileStatus";
export type TFile = {
    body: Buffer | string | boolean;
    name: string;
    path: string;
    status: TFileStatus;
};
//# sourceMappingURL=TFile.d.ts.map