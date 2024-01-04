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
