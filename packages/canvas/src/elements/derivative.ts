import type { Curve, GeometryElement } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface DerivativeAttributes {
  curve: Curve | GeometryElement | string
  color?: string
}

export const derivative = defineElement<DerivativeAttributes>((options) => {
  return (board) => {
    return board.create('derivative', [options.curve], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

