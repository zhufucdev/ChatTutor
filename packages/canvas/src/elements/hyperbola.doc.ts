import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'hyperbola',
  description: 'A hyperbola defined by two foci and a point on the hyperbola',
  attrs: [
    {
      name: 'focus1',
      description: 'The first focus point of the hyperbola, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'focus2',
      description: 'The second focus point of the hyperbola, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point',
      description: 'A point on the hyperbola, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the hyperbola',
      required: false,
    },
  ],
})

