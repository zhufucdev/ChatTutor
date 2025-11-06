import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'mirror',
  description: 'Mirror/reflect an element (point, line, circle, curve, polygon) across a point or line',
  attrs: [
    {
      name: 'element',
      description: 'The element to mirror (Point, Line, Circle, Curve, Polygon, Arc, Sector, Conic, etc.)',
      required: true,
    },
    {
      name: 'mirrorPoint',
      description: 'The point to mirror across (Point element)',
      required: false,
    },
    {
      name: 'mirrorLine',
      description: 'The line to mirror across (Line element)',
      required: false,
    },
    {
      name: 'type',
      description: 'Type of mirroring: "element" (mirror any element) or "point" (mirror point specifically)',
      required: false,
      default: 'element',
    },
    {
      name: 'name',
      description: 'The name/label of the mirrored point (only for type="point")',
      required: false,
    },
    {
      name: 'color',
      description: 'The color of the mirrored element',
      required: false,
    },
  ],
})

