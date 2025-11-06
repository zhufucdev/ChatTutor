import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface ParallelogramAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  point3: [number, number] | Point
  color?: string
  fillColor?: string
}

export const parallelogram = defineElement<ParallelogramAttributes>((options) => {
  return (board) => {
    return board.create('parallelogram', [options.point1, options.point2, options.point3], {
      ...(options.color && { strokeColor: options.color }),
      ...(options.fillColor && { fillColor: options.fillColor }),
    })
  }
})

