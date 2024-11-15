import type { Layer } from 'effect'

/*
  Identity function which ensures that RIn generic of Layer is never.
  Can be used to ensure (at type level) that given layre has no deps.
*/
export const layerAssertFinal = <
  ROut,
  E,
>(layer: Layer.Layer<ROut, E, never>) => layer
