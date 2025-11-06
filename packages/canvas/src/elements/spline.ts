import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface SplineAttributes {
  points: Array<[number, number] | Point>
  type?: 'cubic' | 'cardinal' | 'metapost'
  tau?: number
  color?: string
}

export const spline = defineElement<SplineAttributes>((options) => {
  return (board) => {
    const type = options.type || 'cubic'
    const elementType = 
      type === 'cardinal' ? 'cardinalspline' :
      type === 'metapost' ? 'metapostspline' :
      'spline'
    
    if (type === 'cardinal') {
      return board.create(elementType, [options.points, options.tau ?? 0.5], {
        ...(options.color && { strokeColor: options.color }),
      })
    }
    
    return board.create(elementType, [options.points], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

