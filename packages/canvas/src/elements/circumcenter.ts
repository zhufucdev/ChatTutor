import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface CircumcenterAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  point3: [number, number] | Point
  name?: string
}

export const circumcenter = defineElement<CircumcenterAttributes>((options) => {
  return (board) => {
    return board.create('circumcenter', [options.point1, options.point2, options.point3], {
      ...(options.name && { name: options.name }),
    })
  }
})

