import {
    accessSync, readFileSync,
} from 'node:fs'

export const exists = (p: string): boolean => {
    try {
        accessSync(p)
        return true
    } catch (e) {
        return false
    }
}

export const readAsString = (p: string): string => {
    return readFileSync(p, {
        encoding: 'utf-8',
    })
}