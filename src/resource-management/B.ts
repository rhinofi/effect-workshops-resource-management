import { Context, Layer } from 'effect'

/*
 Interface
*/
export type BService = string

export interface B {
  readonly _: unique symbol
}

export const B = Context.GenericTag<B, BService>('B')

/*
 Implementation
*/
export const BLive = Layer.succeed(B, 'b')
