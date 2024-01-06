export default class Logger {

    info(...m: any[]) {
        this.process('info', m)
    }

    private process(type: string, m: any[]) {
        console.log(`[${type}]`, m.join(' '))
    }

}
