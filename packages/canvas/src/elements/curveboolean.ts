import type { Curve, GeometryElement } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface CurveBooleanAttributes {
  curve1: Curve | GeometryElement | string
  curve2: Curve | GeometryElement | string
  operation: 'difference' | 'intersection' | 'union'
  color?: string
}

export const curveboolean = defineElement<CurveBooleanAttributes>((options) => {
  return (board) => {
    const elementType = 
      options.operation === 'difference' ? 'curvedifference' :
      options.operation === 'intersection' ? 'curveintersection' :
      'curveunion'
    
    return board.create(elementType, [options.curve1, options.curve2], {
      ...(options.color && { strokeColor: options.color, fillColor: options.color }),
    })
  }
})

