export const generate = (fn: (...args: any[]) => any) => {

    return (target: Object, key: string, descr: TypedPropertyDescriptor<any>, ...args: any[]) => {
        if (descr.value !== null) {
            descr.value = fn(descr.value, ...args)
        } else if (descr.get !== null) {
            descr.get = fn(descr.get, ...args)
        } else {
            throw 'Unsupported mode'
        }
    }
}
