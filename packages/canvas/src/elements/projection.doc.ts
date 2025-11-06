import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'projection',
  description: 'The orthogonal projection of a point onto a line or curve',
  attrs: [
    {
      name: 'point',
      description: 'The point to project, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'element',
      description: 'The element (Line, Curve, Circle, Arc, etc.) to project onto',
      required: true,
    },
    {
      name: 'name',
      description: 'The name/label of the projection point',
      required: false,
    },
  ],
})

