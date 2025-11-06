import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface PolygonAttributes {
  points: Array<[number, number] | Point>
  color?: string
  fillColor?: string
  fillOpacity?: number
}

export const polygon = defineElement<PolygonAttributes>((options) => {
  return (board) => {
    return board.create('polygon', [...options.points], {
      ...(options.color && { strokeColor: options.color }),
      ...(options.fillColor && { fillColor: options.fillColor }),
      ...(options.fillOpacity !== undefined && { fillOpacity: options.fillOpacity }),
    })
  }
})

