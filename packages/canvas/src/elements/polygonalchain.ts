import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface PolygonalchainAttributes {
  points: Array<[number, number] | Point>
  color?: string
}

export const polygonalchain = defineElement<PolygonalchainAttributes>((options) => {
  return (board) => {
    return board.create('polygonalchain', [...options.points], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

