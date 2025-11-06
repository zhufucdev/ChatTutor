import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface AxisAttributes {
  from: [number, number] | Point
  to: [number, number] | Point
  color?: string
  withTicks?: boolean
  label?: string
}

export const axis = defineElement<AxisAttributes>((options) => {
  return (board) => {
    return board.create('axis', [options.from, options.to], {
      ...(options.color && { strokeColor: options.color }),
      withTicks: options.withTicks ?? true,
      ...(options.label && { 
        name: options.label,
        withLabel: true,
      }),
    })
  }
})

