import { defineElement } from '../element-structor'

export interface TextAttributes {
  x: number
  y: number
  text: string
  fontSize?: number
  color?: string
}

export const text = defineElement<TextAttributes>((options) => {
  return (board) => {
    return board.create('text', [options.x, options.y, options.text], {
      ...(options.fontSize && { fontSize: options.fontSize }),
      ...(options.color && { color: options.color }),
    })
  }
})

