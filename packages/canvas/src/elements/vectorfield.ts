import { defineElement } from '../element-structor'
import { calculate } from './utils'

export interface VectorfieldAttributes {
  xFunction: string
  yFunction: string
  xCount?: number
  yCount?: number
  color?: string
}

export const vectorfield = defineElement<VectorfieldAttributes>((options) => {
  return (board) => {
    const fx = calculate<(x: number, y: number) => number>(options.xFunction)
    const fy = calculate<(x: number, y: number) => number>(options.yFunction)
    return board.create('vectorfield', [[fx, fy]], {
      ...(options.xCount && { xCount: options.xCount }),
      ...(options.yCount && { yCount: options.yCount }),
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

