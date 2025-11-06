import type { GeometryElement, Line, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface ReflectionAttributes {
  element: GeometryElement | string
  reflectionLine: Line | string
  color?: string
}

export const reflection = defineElement<ReflectionAttributes>((options) => {
  return (board) => {
    return board.create('reflection', [options.element, options.reflectionLine], {
      ...(options.color && { strokeColor: options.color, fillColor: options.color }),
    })
  }
})

