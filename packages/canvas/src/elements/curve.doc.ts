import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'curve',
  description: 'A parametric curve, polar curve, or data plot',
  attrs: [
    {
      name: 'type',
      description: 'The type of curve: "parametric" (x(t), y(t)), "polar" (r(phi)), or "data" (discrete points)',
      required: false,
      default: 'parametric',
    },
    {
      name: 'xData',
      description: 'For parametric: x(t) function expression string. For polar: r(phi) function expression. For data: array of x coordinates or expression evaluating to array',
      required: true,
    },
    {
      name: 'yData',
      description: 'For parametric: y(t) function expression string. For data: array of y coordinates or expression evaluating to array. Not used for polar curves',
      required: false,
    },
    {
      name: 'tMin',
      description: 'Minimum parameter value (t for parametric, phi for polar)',
      required: false,
      default: 'For parametric: -π, for polar: 0',
    },
    {
      name: 'tMax',
      description: 'Maximum parameter value (t for parametric, phi for polar)',
      required: false,
      default: 'For parametric: π, for polar: 2π',
    },
    {
      name: 'color',
      description: 'The color of the curve',
      required: false,
    },
  ],
})

