import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'ellipse',
  description: 'An ellipse defined by two foci and a point on the ellipse',
  attrs: [
    {
      name: 'focus1',
      description: 'The first focus point of the ellipse, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'focus2',
      description: 'The second focus point of the ellipse, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point',
      description: 'A point on the ellipse, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the ellipse',
      required: false,
    },
  ],
})

