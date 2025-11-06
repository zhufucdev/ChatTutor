import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'arc',
  description: 'A circular arc defined by a center point and two points on the circle',
  attrs: [
    {
      name: 'center',
      description: 'The center point of the arc, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'from',
      description: 'The starting point of the arc on the circle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'to',
      description: 'The ending point of the arc on the circle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'type',
      description: 'Type of arc: "default" (shortest arc), "major" (arc > 180°), or "minor" (arc < 180°)',
      required: false,
      default: 'default',
    },
    {
      name: 'color',
      description: 'The color of the arc',
      required: false,
    },
  ],
})

