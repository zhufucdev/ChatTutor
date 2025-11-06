import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface ConicAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  point3: [number, number] | Point
  point4: [number, number] | Point
  point5: [number, number] | Point
  color?: string
}

export const conic = defineElement<ConicAttributes>((options) => {
  return (board) => {
    return board.create('conic', [
      options.point1,
      options.point2,
      options.point3,
      options.point4,
      options.point5,
    ], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

