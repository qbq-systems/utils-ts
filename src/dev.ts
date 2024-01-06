export const panic = (m: string) => {
    if (console) {
        console.log(`PANIC: ${m}`)
    }
    throw new Error('PANIC')
}

export const todo = () => {
    panic('TODO')
}
