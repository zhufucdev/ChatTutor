import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'tracecurve',
  description: 'A curve that traces the path of a moving point',
  attrs: [
    {
      name: 'point',
      description: 'The point whose path to trace (Point element)',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the trace curve',
      required: false,
    },
  ],
})

