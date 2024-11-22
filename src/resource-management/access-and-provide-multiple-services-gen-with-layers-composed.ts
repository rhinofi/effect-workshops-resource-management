import { Console, Effect, Layer, pipe } from 'effect'
import { A, ALive } from './A.js'
import { B, BLive } from './B.js'
import { C, CLive } from './C.js'
import { contextAB } from './context-basics.js'

const program = Effect.gen(function*() {
  yield* Effect.addFinalizer(exit => Effect.log('exit value:', exit))
  const c = yield* C
  yield* Console.log('service C instance:', c)
  return 1
})

const Cdeps = Layer.mergeAll(
  ALive,
  BLive,
)

const allDeps = pipe(
  CLive,
  Layer.provide(Cdeps),
  // Layer.provide(Layer.merge(
  //   ALive,[]
  //   BLive,
  // )),
)

// Provide
const runnable = pipe(
  program,
  Effect.provide(allDeps),
  Effect.andThen(program),
  Effect.provide(allDeps),
  Effect.scoped,
)

// Run program
Effect.runFork(runnable)
