import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface ParabolaAttributes {
  focus: [number, number] | Point
  directrix: [number, number] | Point
  color?: string
}

export const parabola = defineElement<ParabolaAttributes>((options) => {
  return (board) => {
    return board.create('parabola', [options.focus, options.directrix], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

