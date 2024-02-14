export default class Logger {
    private hideT;
    private hideU;
    private prefix;
    private transport;
    addPrefix(p: string): this;
    hideType(): Logger;
    hideUTC(): Logger;
    info(...m: any[]): void;
    private process;
    setPrefix(...p: any[]): Logger;
    setTransport(t: (...args: any[]) => void): Logger;
}
//# sourceMappingURL=Logger.d.ts.map