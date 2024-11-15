import { Console, Effect, pipe } from 'effect'
import { A } from './A.js'
import { B } from './B.js'
import { C, CLive } from './C.js'
import { contextAB } from './context-basics.js'

const program = Effect.gen(function*() {
  const c = yield* C
  yield* Console.log('service C instance:', c)
})

// Provide
const runnable = pipe(
  program,
  Effect.provide(CLive),
  Effect.provide(contextAB),
  // Effect.andThen(program),
  // Effect.provideService(A, 'a1'),
  // Effect.provideService(B, 'b2'),
)

const runnable2 = pipe(
  runnable,
  Effect.andThen(program),
  Effect.provide(CLive),
  Effect.provideService(A, 'a1'),
  Effect.provideService(B, 'b2'),
)

// Run program
Effect.runSync(runnable2)
