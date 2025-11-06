import type { Curve as JSXCurve } from 'jsxgraph'
import { defineElement } from '../element-structor'
import { calculate } from './utils'

export interface CurveAttributes {
  type?: 'parametric' | 'polar' | 'data'
  xData?: number[] | string
  yData?: number[] | string
  tMin?: number
  tMax?: number
  color?: string
}

export const curve = defineElement<CurveAttributes>((options) => {
  return (board) => {
    const type = options.type || 'parametric'
    
    if (type === 'data') {
      // Data plot mode: [xArray, yArray]
      const xData = typeof options.xData === 'string' 
        ? calculate<number[]>(options.xData) 
        : options.xData || []
      const yData = typeof options.yData === 'string' 
        ? calculate<number[]>(options.yData) 
        : options.yData || []
      
      return board.create('curve', [xData, yData], {
        ...(options.color && { strokeColor: options.color }),
      })
    } else if (type === 'polar') {
      // Polar mode: [r(phi), [a,b], phiMin, phiMax]
      const r = typeof options.xData === 'string'
        ? calculate<(t: number) => number>(options.xData)
        : () => 0
      
      return board.create('curve', [
        r,
        [0, 0],
        options.tMin ?? 0,
        options.tMax ?? 2 * Math.PI,
      ], {
        curveType: 'polar',
        ...(options.color && { strokeColor: options.color }),
      })
    } else {
      // Parametric mode: [x(t), y(t), tMin, tMax]
      const x = typeof options.xData === 'string'
        ? calculate<(t: number) => number>(options.xData)
        : () => 0
      const y = typeof options.yData === 'string'
        ? calculate<(t: number) => number>(options.yData)
        : () => 0
      
      return board.create('curve', [
        x,
        y,
        options.tMin ?? -Math.PI,
        options.tMax ?? Math.PI,
      ], {
        ...(options.color && { strokeColor: options.color }),
      })
    }
  }
})

