import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'derivative',
  description: 'The derivative curve of a given curve, showing the rate of change',
  attrs: [
    {
      name: 'curve',
      description: 'The curve or function to take the derivative of (Curve, Functiongraph, or other curve-like element)',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the derivative curve',
      required: false,
    },
  ],
})

