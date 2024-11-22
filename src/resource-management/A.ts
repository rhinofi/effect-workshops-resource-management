import { Console, Context, Duration, Effect, Layer } from 'effect'

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
export const ALive = Layer.scoped(
  A,
  Effect.gen(function*() {
    yield* Console.log('init A sleep')
    yield* Effect.sleep('1 millis')
    yield* Console.log('init A')
    yield* Effect.addFinalizer(() => Effect.log('A cleanup.'))

    const a = yield* Effect.acquireRelease(
      Effect.log('acquire').pipe(Effect.andThen(Effect.succeed('1'))),
      x => Effect.log('release', x),
    )
    return a
  }),
)
