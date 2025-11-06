import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'circumcircle',
  description: 'The circumcircle (or arc/sector) of a triangle defined by three points',
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
      name: 'type',
      description: 'The type of circumcircle element: "circle" (full circumcircle), "arc" (circumcircle arc), or "sector" (circumcircle sector)',
      required: false,
      default: 'circle',
    },
    {
      name: 'color',
      description: 'The color of the circumcircle',
      required: false,
    },
  ],
})

