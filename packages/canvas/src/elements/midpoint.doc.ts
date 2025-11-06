import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'midpoint',
  description: 'The midpoint between two points',
  attrs: [
    {
      name: 'point1',
      description: 'The first point, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point2',
      description: 'The second point, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'name',
      description: 'The name/label of the midpoint',
      required: false,
    },
  ],
})

