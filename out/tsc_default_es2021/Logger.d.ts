export default class Logger {
    private prefix;
    private transport;
    private useUTC;
    addPrefix(p: string): this;
    info(...m: any[]): void;
    private process;
    setPrefix(...p: any[]): this;
    setTransport(t: (...args: any[]) => void): this;
}
//# sourceMappingURL=Logger.d.ts.map