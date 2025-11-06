import type { GeometryElement, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface TangentAttributes {
  element: GeometryElement | string
  point: [number, number] | Point | string
  color?: string
}

export const tangent = defineElement<TangentAttributes>((options) => {
  return (board) => {
    return board.create('tangent', [options.element, options.point], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

