export const currentDate = (): string => {
    const date = new Date()
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export const currentDateTime = (): string => {
    return `${currentDate()} ${currentTime()}`
}

export const currentTime = (): string => {
    const date = new Date()
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
}

/**
 * Calculation of the number of days between two dates in the format `YYYYY-MM-DD`
 *
 * @param from
 * @param to
 */
export const daysBetweenTwoDates = (from: string, to: string): number => {
    const fromList = from.split('-')
    const toList = to.split('-')

    return Math.round(
        Math.abs(
            (new Date(
                parseInt(fromList[0], 10),
                parseInt(fromList[1], 10),
                parseInt(fromList[2], 10)
            ).getTime() - new Date(
                parseInt(toList[0], 10),
                parseInt(toList[1], 10),
                parseInt(toList[2], 10)
            ).getTime()) / 86400000
        )
    )
}

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
