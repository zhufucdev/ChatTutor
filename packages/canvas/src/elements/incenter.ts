import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface IncenterAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  point3: [number, number] | Point
  name?: string
}

export const incenter = defineElement<IncenterAttributes>((options) => {
  return (board) => {
    return board.create('incenter', [options.point1, options.point2, options.point3], {
      ...(options.name && { name: options.name }),
    })
  }
})

