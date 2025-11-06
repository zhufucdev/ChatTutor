import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface IncircleAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  point3: [number, number] | Point
  color?: string
}

export const incircle = defineElement<IncircleAttributes>((options) => {
  return (board) => {
    return board.create('incircle', [options.point1, options.point2, options.point3], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

