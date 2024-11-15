import { Console, Context, Effect, pipe } from 'effect'
import { A } from './A.js'
import { B } from './B.js'

// TASK:
// rewrite program access-and-provide-multiple-services.ts
// using without using any effect helpers like flatMap or andThen
const program = Effect.gen(function*() {
})

// Provide
const runnable = pipe(
  program,
  Effect.provideService(A, 'a'),
  Effect.provideService(B, 'b'),
)

// Run program
Effect.runSync(runnable)
