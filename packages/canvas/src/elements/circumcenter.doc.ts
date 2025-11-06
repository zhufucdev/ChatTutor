import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'circumcenter',
  description: 'The circumcenter point of a triangle defined by three points',
  attrs: [
    {
      name: 'point1',
      description: 'The first vertex of the triangle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point2',
      description: 'The second vertex of the triangle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'point3',
      description: 'The third vertex of the triangle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'name',
      description: 'The name/label of the circumcenter point',
      required: false,
    },
  ],
})

