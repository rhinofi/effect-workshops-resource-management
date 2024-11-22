import { Console, Effect, Layer, pipe } from 'effect'
import { A, ALive } from './A.js'
import { B, BLive } from './B.js'
import { C, CLive } from './C.js'
import { contextAB } from './context-basics.js'

const program = Effect.gen(function*() {
  const c = yield* C
  yield* Console.log('service C instance:', c)
})

const Cdeps = Layer.mergeAll(
  ALive,
  BLive,
  CLive,
)

const allDeps = pipe(
  CLive,
  Layer.provide(Cdeps),
  Layer.provide(Layer.merge(
    ALive,
    BLive,
  )),
)

// Provide
const runnable = pipe(
  program,
  Effect.provide(allDeps),
  Effect.andThen(program),
  Effect.provide(allDeps),
)

// Run program
Effect.runFork(runnable)
