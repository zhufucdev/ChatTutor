import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'vectorfield',
  description: 'A vector field visualization showing vectors at grid points',
  attrs: [
    {
      name: 'xFunction',
      description: 'A javascript function expression string for the x-component of vectors, like `(x, y) => -y`',
      required: true,
    },
    {
      name: 'yFunction',
      description: 'A javascript function expression string for the y-component of vectors, like `(x, y) => x`',
      required: true,
    },
    {
      name: 'xCount',
      description: 'Number of vectors in x direction',
      required: false,
    },
    {
      name: 'yCount',
      description: 'Number of vectors in y direction',
      required: false,
    },
    {
      name: 'color',
      description: 'The color of the vector field arrows',
      required: false,
    },
  ],
})

