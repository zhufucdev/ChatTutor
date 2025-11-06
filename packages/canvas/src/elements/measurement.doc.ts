import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'measurement',
  description: 'Display measurements of geometric elements like length, area, radius, perimeter, etc.',
  attrs: [
    {
      name: 'x',
      description: 'X coordinate of the measurement text position',
      required: true,
    },
    {
      name: 'y',
      description: 'Y coordinate of the measurement text position',
      required: true,
    },
    {
      name: 'operation',
      description: 'The measurement operation: "Length", "Area", "Radius", "Perimeter", "Coords", etc.',
      required: true,
    },
    {
      name: 'element',
      description: 'The geometric element to measure (Line, Circle, Point, Polygon, Arc, Sector, Curve, etc.)',
      required: true,
    },
    {
      name: 'baseUnit',
      description: 'The unit of measurement (e.g., " m", " cm", " px")',
      required: false,
    },
    {
      name: 'prefix',
      description: 'String displayed before the measurement value',
      required: false,
    },
    {
      name: 'suffix',
      description: 'String displayed after the measurement value',
      required: false,
    },
  ],
})

