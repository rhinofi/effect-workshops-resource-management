import { Console, Effect, Layer, pipe } from 'effect'
import { A } from './A.js'
import { B } from './B.js'

const program = Effect.gen(function*() {
  const a = yield* A
  yield* Console.log('service A instance:', a)
  const b = yield* B
  yield* Console.log('service B instance:', b)
})

const context: Layer.Layer<A | B> = pipe(
  Layer.empty,
  Layer.merge(Layer.succeed(A, 'a')),
  Layer.merge(Layer.succeed(B, 'b')),
)

// Provide
const runnable = pipe(
  program,
  Effect.provide(context),
)

// Run program
Effect.runSync(runnable)
