import { utc } from "./time";

export default class Logger {

    private prefix: string[] = []

    private useUTC: boolean = true

    addPrefix(p: string) {
        this.prefix.push(p)
        return this
    }

    info(...m: any[]) {
        this.process('info', m)
    }

    private process(type: string, m: any[]) {
        console.log(
            this.useUTC ? utc() : '',
            `[${type}]`,
            this.prefix.length > 0 ? `[${this.prefix.join('/')}]` : '',
            m.join(' '),
        )
    }

    setPrefix(...p: any[]) {
        this.prefix = p
        return this
    }

}
