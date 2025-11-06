import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'tangent',
  description: 'A tangent line to a curve at a given point',
  attrs: [
    {
      name: 'element',
      description: 'The curve, circle, function, or other element to draw the tangent to',
      required: true,
    },
    {
      name: 'point',
      description: 'The point at which to draw the tangent, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the tangent line',
      required: false,
    },
  ],
})

