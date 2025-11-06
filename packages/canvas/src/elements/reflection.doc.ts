import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'reflection',
  description: 'The reflection of an element across a line',
  attrs: [
    {
      name: 'element',
      description: 'The element to reflect (Point, Line, Circle, Polygon, Curve, Arc, Sector, Conic, etc.)',
      required: true,
    },
    {
      name: 'reflectionLine',
      description: 'The line to reflect across (Line element)',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the reflected element',
      required: false,
    },
  ],
})

