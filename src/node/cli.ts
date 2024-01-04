import readline from 'node:readline'
import process from 'node:process'

export const ask = async  (p: string): Promise<string> => {
    const r = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    let res: string = ''
    while (res === '') {
        res = await new Promise((resolve) => {
            r.question(`${p}`, (a) => {
                resolve(a.trim())
            })
        })
    }
    r.close()

    return res
}
