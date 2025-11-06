import { defineElement } from '../element-structor'
import { calculate } from './utils'

export interface SlopefieldAttributes {
  slopeFunction: string
  xCount?: number
  yCount?: number
  color?: string
}

export const slopefield = defineElement<SlopefieldAttributes>((options) => {
  return (board) => {
    const f = calculate<(x: number, y: number) => number>(options.slopeFunction)
    return board.create('slopefield', [f], {
      ...(options.xCount && { xCount: options.xCount }),
      ...(options.yCount && { yCount: options.yCount }),
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

