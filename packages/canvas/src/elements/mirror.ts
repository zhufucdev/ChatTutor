import type { GeometryElement, Line, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface MirrorAttributes {
  element: GeometryElement | string
  mirrorPoint?: Point | string
  mirrorLine?: Line | string
  type?: 'element' | 'point'
  name?: string
  color?: string
}

export const mirror = defineElement<MirrorAttributes>((options) => {
  return (board) => {
    const type = options.type || 'element'
    const mirror = options.mirrorPoint || options.mirrorLine
    
    if (type === 'point') {
      return board.create('mirrorpoint', [options.element, mirror], {
        ...(options.name && { name: options.name }),
      })
    } else {
      return board.create('mirrorelement', [options.element, mirror], {
        ...(options.color && { strokeColor: options.color, fillColor: options.color }),
      })
    }
  }
})

