import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface SectorAttributes {
  center: [number, number] | Point
  from: [number, number] | Point
  to: [number, number] | Point
  type?: 'default' | 'major' | 'minor'
  color?: string
  fillColor?: string
}

export const sector = defineElement<SectorAttributes>((options) => {
  return (board) => {
    const type = options.type || 'default'
    const elementType = 
      type === 'major' ? 'majorsector' :
      type === 'minor' ? 'minorsector' :
      'sector'
    
    return board.create(elementType, [options.center, options.from, options.to], {
      ...(options.color && { strokeColor: options.color }),
      ...(options.fillColor && { fillColor: options.fillColor }),
    })
  }
})

