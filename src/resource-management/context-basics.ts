import { Context } from 'effect'
import { A } from './A.js'
import { B } from './B.js'

// TASK: annotate types of all variables

// Make context for service
const contextA = Context.make(A, 'a')
const contextB = Context.make(B, 'b')

contextB.unsafeMap

// Combine contexts
export const contextAB = Context.merge(contextA, contextB)

console.log({
  contextA: contextA.unsafeMap,
  contextB: contextB.unsafeMap,
  contextAB: contextAB.unsafeMap,
})
