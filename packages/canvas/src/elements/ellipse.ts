import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface EllipseAttributes {
  focus1: [number, number] | Point
  focus2: [number, number] | Point
  point: [number, number] | Point
  color?: string
}

export const ellipse = defineElement<EllipseAttributes>((options) => {
  return (board) => {
    return board.create('ellipse', [options.focus1, options.focus2, options.point], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

