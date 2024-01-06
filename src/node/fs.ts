import {
    accessSync, readdirSync, readFileSync, statSync,
} from 'node:fs'
import { join } from "node:path";
import type { TFile } from "./fs/types/TFile";

export const exists = (p: string): boolean => {
    try {
        accessSync(p)
        return true
    } catch (e) {
        return false
    }
}

export const existsOrError = (path: string): boolean => {
    if (!exists(path)) {
        throw new Error('File not exists')
    }
    return true
}

export const isFile = (path: string): boolean => {
    return statSync(path).isFile()
}

export const readAllFiles = (path: string): TFile[] => {
    existsOrError(path)
    const data: TFile[] = []
    readdirSync(path).forEach((file) => {
        const fullPath = join(path, file)
        if (!isFile(fullPath)) {
            return
        }
        data.push({
            body: readAsString(fullPath),
            name: file,
            path: fullPath,
            status: 'OK',
        })
    })

    return data
}

export const readAsJSON = (p: string): unknown => {
    try {
        return JSON.parse(readAsString(p))
    } catch (e) {
        return null
    }
}

export const readAsString = (p: string): string => {
    return readFileSync(p, {
        encoding: 'utf-8',
    })
}