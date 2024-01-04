import {
    accessSync,
} from 'node:fs'

export const exists = (p: string): boolean => {
    try {
        accessSync(p)
        return true
    } catch (e) {
        return false
    }
}
