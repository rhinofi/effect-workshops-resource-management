import { Context } from 'effect'
import { expect, it } from 'vitest'
import { A } from './A.js'
import { B } from './B.js'
import { contextAB } from './context-basics.js'

it('Replace Service A in contextAB with new value: "a1"', () => {
  const expectedResult = Context.merge(
    Context.make(A, 'a1'),
    Context.make(B, 'b'),
  )

  // Modify this line only
  const result = contextAB

  expect(result).toStrictEqual(expectedResult)
})
