import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'sector',
  description: 'A circular sector defined by a center point and two points on the circle',
  attrs: [
    {
      name: 'center',
      description: 'The center point of the sector, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'from',
      description: 'The starting point of the sector on the circle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'to',
      description: 'The ending point of the sector on the circle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'type',
      description: 'Type of sector: "default" (shortest sector), "major" (sector > 180°), or "minor" (sector < 180°)',
      required: false,
      default: 'default',
    },
    {
      name: 'color',
      description: 'The border color of the sector',
      required: false,
    },
    {
      name: 'fillColor',
      description: 'The fill color of the sector',
      required: false,
    },
  ],
})

