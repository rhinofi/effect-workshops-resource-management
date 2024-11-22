import { Console, Context, Effect, Layer } from 'effect'

/*
 Interface
*/
export type AService = string

export interface A {
  readonly _: unique symbol
}

export const A = Context.GenericTag<A, AService>('A')

/*
 Implementation
*/
export const ALive = Layer.effect(
  A,
  Effect.gen(function*() {
    yield* Console.log('init A sleep')
    yield* Effect.sleep('3 second')
    yield* Console.log('init A')
    return 'a'
  }),
)
