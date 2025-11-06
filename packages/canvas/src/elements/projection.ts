import type { GeometryElement, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface ProjectionAttributes {
  point: [number, number] | Point | string
  element: GeometryElement | string
  name?: string
}

export const projection = defineElement<ProjectionAttributes>((options) => {
  return (board) => {
    return board.create('orthogonalprojection', [options.point, options.element], {
      ...(options.name && { name: options.name }),
    })
  }
})

