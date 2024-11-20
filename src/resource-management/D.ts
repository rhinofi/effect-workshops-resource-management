import { Console, Context, Effect, Layer } from 'effect'
import { A, ALive, type AService } from './A.js'
import { B, BLive, type BService } from './B.js'

/*
 Interface
*/
export type DService = string

export class D extends Context.Tag('D')<D, DService>() {}

/*
 Implementation
*/
export const DLive = Layer.effect(
  D,
  Effect.gen(function*() {
    yield* Console.log('init D')
    const a = yield* A

    return `D({ a:${a} })`
  }),
)
