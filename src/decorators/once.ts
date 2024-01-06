import { generate } from "./generate";

export const Once = () => {
    return generate((fn: (...args: any[]) => any) => {
        let ready = false
        let result: unknown
        return function (...args: any[]) {
            if (ready) {
                return result
            }

            ready = true
            // @ts-ignore
            result = fn.apply(this, args)
            return result
        }
    })
}
