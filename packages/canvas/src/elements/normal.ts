import type { GeometryElement, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface NormalAttributes {
  element: GeometryElement | string
  point: [number, number] | Point | string
  color?: string
}

export const normal = defineElement<NormalAttributes>((options) => {
  return (board) => {
    return board.create('normal', [options.element, options.point], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

