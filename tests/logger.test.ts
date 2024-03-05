import test from 'ava'
import { Logger } from "../src";

test('logger: transport', async (t) => {
    const logger = new Logger()
    let success = false
    logger.setTransport((...args: any[]) => {
        console.log(args.join(' '))
        success = true
    })
    logger.info('test: transport')
    t.true(success)
})

test('logger: transport with prettifyDateTime()', async (t) => {
    const logger = new Logger()
    logger.prettifyDateTime()
    let success = false
    logger.setTransport((...args: any[]) => {
        console.log(args.join(' '))
        success = true
    })
    logger.info('test: prettifyDateTime')
    t.true(success)
})
