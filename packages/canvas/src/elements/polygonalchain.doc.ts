import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'polygonalchain',
  description: 'A connected series of line segments (like a polygon without closing)',
  attrs: [
    {
      name: 'points',
      description: 'Array of vertices, each can be a tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the polygonal chain',
      required: false,
    },
  ],
})

