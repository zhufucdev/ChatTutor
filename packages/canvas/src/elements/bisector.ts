import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface BisectorAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  point3: [number, number] | Point
  color?: string
}

export const bisector = defineElement<BisectorAttributes>((options) => {
  return (board) => {
    return board.create('bisector', [options.point1, options.point2, options.point3], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

