import { TFileStatus } from "./TFileStatus";
import * as Buffer from 'node:buffer'

export type TFile = {
    body: Buffer | string | boolean,
    name: string,
    path: string,
    status: TFileStatus,
}
