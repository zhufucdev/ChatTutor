import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'intersection',
  description: 'An intersection point of two elements (lines, circles, curves, etc.)',
  attrs: [
    {
      name: 'element1',
      description: 'The first element (Line, Circle, Curve, Arc, Conic, Polygon, etc.)',
      required: true,
    },
    {
      name: 'element2',
      description: 'The second element (Line, Circle, Curve, Arc, Conic, Polygon, etc.)',
      required: true,
    },
    {
      name: 'index',
      description: 'Which intersection point to use when there are multiple (0 for first, 1 for second, etc.)',
      required: false,
      default: '0',
    },
    {
      name: 'name',
      description: 'The name/label of the intersection point',
      required: false,
    },
  ],
})

