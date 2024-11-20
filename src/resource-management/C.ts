import { Console, Context, Effect, Layer } from 'effect'
import { A, ALive, type AService } from './A.js'
import { B, BLive, type BService } from './B.js'

/*
 Interface
*/
export type CService = string

export class C extends Context.Tag('C')<C, CService>() {}

/*
 Implementation
*/
export const CLive = Layer.effect(
  C,
  Effect.gen(function*() {
    yield* Console.log('init C')
    const a = yield* A
    const b = yield* B

    return `C({ a:${a}, b:${b} })`
  }),
)

const Cfactory = (a: AService, b: BService): CService => a + b
