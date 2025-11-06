import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface TracecurveAttributes {
  point: Point | string
  color?: string
}

export const tracecurve = defineElement<TracecurveAttributes>((options) => {
  return (board) => {
    return board.create('tracecurve', [options.point], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

