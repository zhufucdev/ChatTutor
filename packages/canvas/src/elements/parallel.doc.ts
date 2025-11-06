import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'parallel',
  description: 'A line parallel to a given line passing through a given point',
  attrs: [
    {
      name: 'line',
      description: 'The line to be parallel to (Line element)',
      required: true,
    },
    {
      name: 'point',
      description: 'The point the parallel line passes through, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the parallel line',
      required: false,
    },
  ],
})

