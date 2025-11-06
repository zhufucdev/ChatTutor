import type { GeometryElement } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface MeasurementAttributes {
  x: number
  y: number
  operation: string
  element: GeometryElement | string
  baseUnit?: string
  prefix?: string
  suffix?: string
}

export const measurement = defineElement<MeasurementAttributes>((options) => {
  return (board) => {
    return board.create('measurement', [
      options.x,
      options.y,
      [options.operation, options.element]
    ], {
      ...(options.baseUnit && { baseUnit: options.baseUnit }),
      ...(options.prefix && { prefix: options.prefix }),
      ...(options.suffix && { suffix: options.suffix }),
    })
  }
})

