import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'text',
  description: 'A text element at a specific position on the canvas',
  attrs: [
    {
      name: 'x',
      description: 'X coordinate of the text position',
      required: true,
    },
    {
      name: 'y',
      description: 'Y coordinate of the text position',
      required: true,
    },
    {
      name: 'text',
      description: 'The text content, supports LaTeX and HTML',
      required: true,
    },
    {
      name: 'fontSize',
      description: 'Font size of the text',
      required: false,
    },
    {
      name: 'color',
      description: 'Color of the text',
      required: false,
    },
  ],
})

