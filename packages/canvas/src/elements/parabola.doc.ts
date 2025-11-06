import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'parabola',
  description: 'A parabola defined by a focus point and a directrix line',
  attrs: [
    {
      name: 'focus',
      description: 'The focus point of the parabola, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'directrix',
      description: 'The directrix line point, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the parabola',
      required: false,
    },
  ],
})

