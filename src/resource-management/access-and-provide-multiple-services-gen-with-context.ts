import { Console, Context, Effect, pipe } from 'effect'
import { A } from './A.js'
import { B } from './B.js'

const program = Effect.gen(function*() {
  const a = yield* A
  yield* Console.log('service A instance:', a)
  const b = yield* A
  yield* Console.log('service B instance:', b)
})

const context: Context.Context<A | B> = pipe(
  Context.empty(),
  // add stuff here to make the code compile
)

// Provide
const runnable = pipe(
  program,
  Effect.provide(context),
)

// Run program
Effect.runSync(runnable)