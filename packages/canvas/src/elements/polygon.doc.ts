import { registerCanvasElementDocument} from '../document'

export default registerCanvasElementDocument({
  name: 'polygon',
  description: 'A polygon defined by an array of vertices',
  attrs: [
    {
      name: 'points',
      description: 'Array of vertices, each can be a tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The border color of the polygon',
      required: false,
    },
    {
      name: 'fillColor',
      description: 'The fill color of the polygon',
      required: false,
    },
    {
      name: 'fillOpacity',
      description: 'The fill opacity (0-1) of the polygon',
      required: false,
    },
  ],
})

