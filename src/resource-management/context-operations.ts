import assert from 'assert'
import { Context, Equal } from 'effect'
import { A } from './A.js'
import { B } from './B.js'

// Make context for service
const contextA = Context.make(A, 'a')

console.log(
  "Equal.equals(contextA, A.context('a')): ",
  Equal.equals(contextA, A.context('a')),
)

console.log(
  "Equal.equals(contextA, A.context('whatever')): ",
  Equal.equals(contextA, A.context('whatever')),
)

const contextB = Context.make(B, 'b')
console.log('contextB:', contextB)

// Combine contexts
const contextAB = Context.merge(contextA, contextB)
console.log('contextAB:', contextAB)

const contextA2 = Context.make(A, 'a2')
console.log('contextA2:', contextA2)

const contextA2B = Context.merge(contextAB, contextA2)
console.log('contextA2B:', contextA2B)

const contextA2B2 = Context.add(contextA2B, B, 'b2')

console.log('contextA2B2:', contextA2B2)

// Get service from context
console.log('Context.get(contextA, A):', Context.get(contextA, A))
console.log('B from contextA:', Context.getOption(contextA, B))

try {
  // @ts-expect-error
  Context.get(contextA, B)
} catch (error) {
  console.log('Context.get(contextA, B):', error)
}

try {
  Context.unsafeGet(contextA, B)
} catch (error) {
  console.log('Context.unsafeGet(contextA, B)', error)
}
