import { defineElement } from '../element-structor'
import { calculate } from './utils'

export interface ImplicitCurveAttributes {
  equation: string
  color?: string
}

export const implicitcurve = defineElement<ImplicitCurveAttributes>((options) => {
  return (board) => {
    const f = calculate<(x: number, y: number) => number>(options.equation)
    return board.create('implicitcurve', [f], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

