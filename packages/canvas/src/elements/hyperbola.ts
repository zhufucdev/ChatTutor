import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface HyperbolaAttributes {
  focus1: [number, number] | Point
  focus2: [number, number] | Point
  point: [number, number] | Point
  color?: string
}

export const hyperbola = defineElement<HyperbolaAttributes>((options) => {
  return (board) => {
    return board.create('hyperbola', [options.focus1, options.focus2, options.point], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

