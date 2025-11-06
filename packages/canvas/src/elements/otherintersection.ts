import type { GeometryElement, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface OtherintersectionAttributes {
  element1: GeometryElement | string
  element2: GeometryElement | string
  knownPoint: Point | string
  name?: string
}

export const otherintersection = defineElement<OtherintersectionAttributes>((options) => {
  return (board) => {
    return board.create('otherintersection', [
      options.element1,
      options.element2,
      options.knownPoint
    ], {
      ...(options.name && { name: options.name }),
    })
  }
})

