import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'parallelogram',
  description: 'A parallelogram defined by three adjacent vertices',
  attrs: [
    {
      name: 'point1',
      description: 'The first vertex of the parallelogram, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point2',
      description: 'The second vertex of the parallelogram, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point3',
      description: 'The third vertex of the parallelogram, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The border color of the parallelogram',
      required: false,
    },
    {
      name: 'fillColor',
      description: 'The fill color of the parallelogram',
      required: false,
    },
  ],
})

