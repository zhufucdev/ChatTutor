import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'glider',
  description: 'A point that is constrained to move along a curve, line, circle, or other element',
  attrs: [
    {
      name: 'x',
      description: 'Initial x coordinate of the glider point',
      required: true,
    },
    {
      name: 'y',
      description: 'Initial y coordinate of the glider point',
      required: true,
    },
    {
      name: 'element',
      description: 'The element (Line, Circle, Curve, Function, Arc, Sector, Polygon, etc.) that the glider is constrained to',
      required: true,
    },
    {
      name: 'name',
      description: 'The name/label of the glider point',
      required: false,
    },
  ],
})

