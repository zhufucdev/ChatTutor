import type { GeometryElement, Line, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface PerpendicularAttributes {
  element: Line | GeometryElement | string
  point: [number, number] | Point | string
  type?: 'line' | 'point' | 'segment'
  name?: string
  color?: string
}

export const perpendicular = defineElement<PerpendicularAttributes>((options) => {
  return (board) => {
    const type = options.type || 'line'
    const elementType = 
      type === 'point' ? 'perpendicularpoint' :
      type === 'segment' ? 'perpendicularsegment' :
      'perpendicular'
    
    return board.create(elementType, [options.element, options.point], {
      ...(options.name && { name: options.name }),
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

