/**
 * Convert `Nov 14 12:01:22 2023 GMT` to `2023-11-14`
 *
 * @param g
 */
export const gmtDateToYYYYMMDD = (g: string): string => {
    const dateObj = new Date(g)
    const year = dateObj.getUTCFullYear()
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
    const day = dateObj.getUTCDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
}

export const iso = (): string => {
    return new Date().toISOString()
}

export const sleepMilliseconds = async (d: number) => {
    await new Promise((resolve: any) => setTimeout(() => {
        resolve(true)
    }, d))
}

export const sleepMinutes = async (d: number) => {
    await sleepSeconds(d * 60)
}

export const sleepSeconds = async (d: number) => {
    await sleepMilliseconds(d * 1000)
}

export const utc = (): string => {
    return new Date().toUTCString()
}
