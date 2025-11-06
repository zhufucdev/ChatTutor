import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'spline',
  description: 'A spline curve through a set of points with different interpolation algorithms',
  attrs: [
    {
      name: 'points',
      description: 'Array of points to create the spline through, each point can be a tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'type',
      description: 'Type of spline interpolation: "cubic" (cubic spline), "cardinal" (cardinal spline with tau parameter), or "metapost" (Metapost spline)',
      required: false,
      default: 'cubic',
    },
    {
      name: 'tau',
      description: 'Tension parameter for cardinal spline (0-1, where 0 is linear and 1 is very curved). Only used when type="cardinal"',
      required: false,
      default: '0.5',
    },
    {
      name: 'color',
      description: 'The color of the spline curve',
      required: false,
    },
  ],
})

