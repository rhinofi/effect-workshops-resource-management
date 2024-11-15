import { Console, Context, Effect, pipe } from 'effect'
import { A } from './A.js'
import { B } from './B.js'

// Task: annotate all variables with types

// Use service
const getAndLogA = Effect.flatMap(
  A,
  a => Console.log('service A instance:', a),
)
const getAndLogB = Effect.flatMap(
  B,
  b => Console.log('service B instance:', b),
)

const program = Effect.andThen(
  getAndLogA,
  getAndLogB,
)

// Provide
const runnable = pipe(
  program,
  Effect.provideService(A, 'a'),
  Effect.provideService(B, 'b'),
)

// Run program
Effect.runSync(runnable)
