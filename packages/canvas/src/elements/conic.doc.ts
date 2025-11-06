import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'conic',
  description: 'A conic section (ellipse, parabola, or hyperbola) defined by five points',
  attrs: [
    {
      name: 'point1',
      description: 'The first point on the conic, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point2',
      description: 'The second point on the conic, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point3',
      description: 'The third point on the conic, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point4',
      description: 'The fourth point on the conic, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point5',
      description: 'The fifth point on the conic, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the conic section',
      required: false,
    },
  ],
})

