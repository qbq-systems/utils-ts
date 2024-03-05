import { currentDateTime, utc } from "./time";

export default class Logger {

    private hideT: boolean = false

    private hideU: boolean = false

    private prefix: string[] = []

    private prettifyDT: boolean = false

    private transport: (...args: any[]) => void = console.log

    addPrefix(p: string) {
        this.prefix.push(p)
        return this
    }

    hideType(): Logger {
        this.hideT = true
        return this
    }

    hideUTC(): Logger {
        this.hideU = true
        return this
    }

    info(...m: any[]) {
        this.process('info', m)
    }

    prettifyDateTime(): Logger {
        this.prettifyDT = true
        return this
    }

    private process(type: string, m: any[]) {
        this.transport(
            ...[
                this.hideU ? '' : (
                    this.prettifyDT ? `${currentDateTime()}` : utc()
                ),
                this.hideT ? '' : `[${type}]`,
                this.prefix.length > 0 ? `[${this.prefix.join('|')}]` : '',
                m.join(' '),
        ].filter((item: string) => {
                return item.length > 0
            })
        )
    }

    setPrefix(...p: any[]): Logger {
        this.prefix = p
        return this
    }

    setTransport(t: (...args: any[]) => void): Logger {
        this.transport = t
        return this
    }

}
