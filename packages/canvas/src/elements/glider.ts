import type { GeometryElement, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface GliderAttributes {
  x: number
  y: number
  element: GeometryElement | string
  name?: string
}

export const glider = defineElement<GliderAttributes>((options) => {
  return (board) => {
    return board.create('glider', [options.x, options.y, options.element], {
      ...(options.name && { name: options.name }),
    })
  }
})

