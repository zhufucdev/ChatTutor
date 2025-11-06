import type { GeometryElement } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface IntersectionAttributes {
  element1: GeometryElement | string
  element2: GeometryElement | string
  index?: number
  name?: string
}

export const intersection = defineElement<IntersectionAttributes>((options) => {
  return (board) => {
    return board.create('intersection', [options.element1, options.element2, options.index ?? 0], {
      ...(options.name && { name: options.name }),
    })
  }
})

