import { defineElement } from '../element-structor'

export interface LabelAttributes {
  x: number
  y: number
  text: string
  fontSize?: number
  color?: string
}

export const label = defineElement<LabelAttributes>((options) => {
  return (board) => {
    return board.create('text', [options.x, options.y, options.text], {
      ...(options.fontSize && { fontSize: options.fontSize }),
      ...(options.color && { color: options.color }),
    })
  }
})

