import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'bisector',
  description: 'An angle bisector line defined by three points',
  attrs: [
    {
      name: 'point1',
      description: 'The first point of the angle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point2',
      description: 'The vertex point of the angle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point3',
      description: 'The third point of the angle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the bisector line',
      required: false,
    },
  ],
})

