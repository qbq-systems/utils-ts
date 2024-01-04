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
