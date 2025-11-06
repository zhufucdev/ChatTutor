import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'otherintersection',
  description: 'Find the other intersection point of two elements when one intersection is already known',
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
      name: 'knownPoint',
      description: 'The already known intersection point (Point element)',
      required: true,
    },
    {
      name: 'name',
      description: 'The name/label of the other intersection point',
      required: false,
    },
  ],
})

