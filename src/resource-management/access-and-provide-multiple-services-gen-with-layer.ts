import { Console, Effect, Layer, pipe } from 'effect'
import { layerAssertFinal } from '../lib/layer.js'
import { A, ALive } from './A.js'
import { B, BLiveWithLogAfterInit } from './B.js'
import { C, CLive } from './C.js'

const program = Effect.gen(function*() {
  yield* Console.log('running program with context:')
  yield* Console.log(yield* Effect.context<C>())
  const a = yield* A
  yield* Console.log('service A instance:', a)
  const b = yield* B
  yield* Console.log('service B instance:', b)
})

const LogInit = Layer.effectDiscard(Console.log('initilizing Layers'))

const ABLive = Layer.merge(BLiveWithLogAfterInit, ALive)
const CFinal = layerAssertFinal(Layer.provide(
  CLive,
  ABLive,
))

const context = Layer.mergeAll(
  ABLive,
  CFinal,
)

// Provide
const runnable = pipe(
  program,
  Effect.provide(context),
)

// Run program
Effect.runFork(runnable)
