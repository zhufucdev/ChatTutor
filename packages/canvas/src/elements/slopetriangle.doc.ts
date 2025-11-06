import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'slopetriangle',
  description: 'A slope triangle showing rise over run for a line or curve at a point',
  attrs: [
    {
      name: 'element',
      description: 'The line, curve, or function to show the slope for',
      required: true,
    },
    {
      name: 'point',
      description: 'The point at which to show the slope triangle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the slope triangle',
      required: false,
    },
  ],
})

