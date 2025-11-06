import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'slopefield',
  description: 'A slope field (direction field) for a differential equation dy/dx = f(x, y)',
  attrs: [
    {
      name: 'slopeFunction',
      description: 'A javascript function expression string that takes (x, y) and returns the slope, like `(x, y) => x + y`',
      required: true,
    },
    {
      name: 'xCount',
      description: 'Number of slope indicators in x direction',
      required: false,
    },
    {
      name: 'yCount',
      description: 'Number of slope indicators in y direction',
      required: false,
    },
    {
      name: 'color',
      description: 'The color of the slope field lines',
      required: false,
    },
  ],
})

