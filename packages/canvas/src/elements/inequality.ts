import type { Line } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface InequalityAttributes {
  line: Line | string
  fillColor?: string
  fillOpacity?: number
}

export const inequality = defineElement<InequalityAttributes>((options) => {
  return (board) => {
    return board.create('inequality', [options.line], {
      ...(options.fillColor && { fillColor: options.fillColor }),
      ...(options.fillOpacity !== undefined && { fillOpacity: options.fillOpacity }),
    })
  }
})

