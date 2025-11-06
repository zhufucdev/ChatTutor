import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'normal',
  description: 'A normal (perpendicular) line to a curve or line at a given point',
  attrs: [
    {
      name: 'element',
      description: 'The curve, line, circle, function, or other element to draw the normal to',
      required: true,
    },
    {
      name: 'point',
      description: 'The point at which to draw the normal, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the normal line',
      required: false,
    },
  ],
})

