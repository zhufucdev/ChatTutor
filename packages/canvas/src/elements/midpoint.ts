import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface MidpointAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  name?: string
}

export const midpoint = defineElement<MidpointAttributes>((options) => {
  return (board) => {
    return board.create('midpoint', [options.point1, options.point2], {
      ...(options.name && { name: options.name }),
    })
  }
})

