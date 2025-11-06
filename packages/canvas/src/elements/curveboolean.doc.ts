import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'curveboolean',
  description: 'Boolean operations on two curves (difference, intersection, or union)',
  attrs: [
    {
      name: 'curve1',
      description: 'The first curve (Curve, Circle, Polygon, or other curve-like element)',
      required: true,
    },
    {
      name: 'curve2',
      description: 'The second curve (Curve, Circle, Polygon, or other curve-like element)',
      required: true,
    },
    {
      name: 'operation',
      description: 'The boolean operation: "difference" (curve1 - curve2), "intersection" (curve1 ∩ curve2), or "union" (curve1 ∪ curve2)',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the resulting curve',
      required: false,
    },
  ],
})

