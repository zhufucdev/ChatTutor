import type { Curve, GeometryElement, Line, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface SlopetriangleAttributes {
  element: Line | Curve | GeometryElement | string
  point: [number, number] | Point | string
  color?: string
}

export const slopetriangle = defineElement<SlopetriangleAttributes>((options) => {
  return (board) => {
    return board.create('slopetriangle', [options.element, options.point], {
      ...(options.color && { strokeColor: options.color, fillColor: options.color }),
    })
  }
})

