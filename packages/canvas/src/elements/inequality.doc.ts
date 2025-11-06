import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'inequality',
  description: 'A shaded region representing an inequality defined by a line',
  attrs: [
    {
      name: 'line',
      description: 'The boundary line of the inequality (Line element)',
      required: true,
    },
    {
      name: 'fillColor',
      description: 'The color of the shaded region',
      required: false,
    },
    {
      name: 'fillOpacity',
      description: 'The opacity of the shaded region (0-1)',
      required: false,
    },
  ],
})

