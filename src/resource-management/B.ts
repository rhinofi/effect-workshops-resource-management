import { Console, Context, Effect, Layer, pipe } from 'effect'

/*
 Interface
*/
export type BService = string

export interface B {
  readonly _: unique symbol
}

export const B = Context.GenericTag<B, BService>('B')

/*
 Implementation
*/
export const BLive = Layer.effect(
  B,
  Effect.gen(function*() {
    yield* Console.log('init B sleep')
    yield* Effect.sleep('3 second')
    yield* Console.log('init B')
    return 'b'
  }),
)

export const BLiveWithLogAfterInit = Layer.tap(
  BLive,
  () => Console.log('after init b'),
)
// Layer.succeed(B, 'b')
