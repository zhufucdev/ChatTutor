import type { Line, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface ParallelAttributes {
  line: Line | string
  point: [number, number] | Point | string
  color?: string
}

export const parallel = defineElement<ParallelAttributes>((options) => {
  return (board) => {
    return board.create('parallel', [options.line, options.point], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

