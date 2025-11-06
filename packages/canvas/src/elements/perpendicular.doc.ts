import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'perpendicular',
  description: 'A perpendicular line, point (foot), or segment to a given line through a given point',
  attrs: [
    {
      name: 'element',
      description: 'The line or element to be perpendicular to',
      required: true,
    },
    {
      name: 'point',
      description: 'The point the perpendicular passes through, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'type',
      description: 'Type of perpendicular: "line" (perpendicular line), "point" (perpendicular foot point), or "segment" (perpendicular segment)',
      required: false,
      default: 'line',
    },
    {
      name: 'name',
      description: 'The name/label (mainly for type="point")',
      required: false,
    },
    {
      name: 'color',
      description: 'The color of the perpendicular element',
      required: false,
    },
  ],
})

