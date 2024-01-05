export const pretty = (o: unknown): string | null => {
    try {
        return JSON.stringify(o, null, 4)
    } catch (e) {
        return null
    }
}
