import { Console, Effect } from 'effect'
import { A } from './A.js'

// Use service
const program = Effect.gen(function*() {
  const a = yield* A
  yield* Console.log(a)
})

// Provide service
const runnable = Effect.provideService(program, A, 'a')

// Run program
Effect.runSync(runnable)
