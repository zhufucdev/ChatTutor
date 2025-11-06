import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface CircumcircleAttributes {
  point1: [number, number] | Point
  point2: [number, number] | Point
  point3: [number, number] | Point
  type?: 'circle' | 'arc' | 'sector'
  color?: string
}

export const circumcircle = defineElement<CircumcircleAttributes>((options) => {
  return (board) => {
    const type = options.type || 'circle'
    const elementType = type === 'circle' ? 'circumcircle' : 
                       type === 'arc' ? 'circumcirclearc' : 
                       'circumcirclesector'
    
    return board.create(elementType, [options.point1, options.point2, options.point3], {
      ...(options.color && { strokeColor: options.color, fillColor: options.color }),
    })
  }
})

