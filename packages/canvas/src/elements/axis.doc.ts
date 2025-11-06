import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'axis',
  description: 'A coordinate axis with optional ticks and labels',
  attrs: [
    {
      name: 'from',
      description: 'The start point of the axis, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'to',
      description: 'The end point of the axis, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the axis',
      required: false,
    },
    {
      name: 'withTicks',
      description: 'Whether to show ticks on the axis',
      required: false,
      default: 'true',
    },
    {
      name: 'label',
      description: 'Label text for the axis',
      required: false,
    },
  ],
})

