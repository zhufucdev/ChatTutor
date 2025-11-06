import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'label',
  description: 'A text label at a specific position on the canvas',
  attrs: [
    {
      name: 'x',
      description: 'X coordinate of the label position',
      required: true,
    },
    {
      name: 'y',
      description: 'Y coordinate of the label position',
      required: true,
    },
    {
      name: 'text',
      description: 'The text content of the label, supports LaTeX',
      required: true,
    },
    {
      name: 'fontSize',
      description: 'Font size of the label text',
      required: false,
    },
    {
      name: 'color',
      description: 'Color of the label text',
      required: false,
    },
  ],
})

