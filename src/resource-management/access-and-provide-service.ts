import { Console, Context, Effect } from 'effect'
import { A } from './A.js'

// Use service
const program = Effect.flatMap(A, Console.log)

// Provide service
const runnable = Effect.provideService(program, A, 'a')

// Run program
Effect.runSync(runnable)
