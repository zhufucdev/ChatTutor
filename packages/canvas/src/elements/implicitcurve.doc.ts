import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'implicitcurve',
  description: 'A curve defined by an implicit equation f(x, y) = 0',
  attrs: [
    {
      name: 'equation',
      description: 'A javascript function expression string that takes two parameters (x, y) and returns a value, like `(x, y) => x*x + y*y - 1` for a unit circle',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the implicit curve',
      required: false,
    },
  ],
})

