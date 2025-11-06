import { point } from './point'
import { line } from './line'
import { func } from './func'
import { angle } from './angle'
import { arc } from './arc'
import { arrow } from './arrow'
import { circle } from './circle'
import { boxplot } from './boxplot'
import { axis } from './axis'
import { bisector } from './bisector'
import { circumcenter } from './circumcenter'
import { circumcircle } from './circumcircle'
import { conic } from './conic'
import { curve } from './curve'
import { curveboolean } from './curveboolean'
import { derivative } from './derivative'
import { ellipse } from './ellipse'
import { glider } from './glider'
import { hyperbola } from './hyperbola'
import { implicitcurve } from './implicitcurve'
import { incenter } from './incenter'
import { incircle } from './incircle'
import { inequality } from './inequality'
import { label } from './label'
import { intersection } from './intersection'
import { measurement } from './measurement'
import { midpoint } from './midpoint'
import { mirror } from './mirror'
import { normal } from './normal'
import { projection } from './projection'
import { otherintersection } from './otherintersection'
import { parabola } from './parabola'
import { parallelogram } from './parallelogram'
import { parallel } from './parallel'
import { perpendicular } from './perpendicular'
import { polygon } from './polygon'
import { polygonalchain } from './polygonalchain'
import { reflection } from './reflection'
import { sector } from './sector'
import { slopefield } from './slopefield'
import { slopetriangle } from './slopetriangle'
import { spline } from './spline'
import { tangent } from './tangent'
import { text } from './text'
import { tracecurve } from './tracecurve'
import { vectorfield } from './vectorfield'
import type { ElementStructor } from '../element-structor'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const structures: [string, ElementStructor<any>][] = [
  ['point', point],
  ['line', line],
  ['func', func],
  ['angle', angle],
  ['arc', arc],
  ['arrow', arrow],
  ['circle', circle],
  ['boxplot', boxplot],
  ['axis', axis],
  ['bisector', bisector],
  ['circumcenter', circumcenter],
  ['circumcircle', circumcircle],
  ['conic', conic],
  ['curve', curve],
  ['curveboolean', curveboolean],
  ['derivative', derivative],
  ['ellipse', ellipse],
  ['glider', glider],
  ['hyperbola', hyperbola],
  ['implicitcurve', implicitcurve],
  ['incenter', incenter],
  ['incircle', incircle],
  ['inequality', inequality],
  ['label', label],
  ['intersection', intersection],
  ['measurement', measurement],
  ['midpoint', midpoint],
  ['mirror', mirror],
  ['normal', normal],
  ['projection', projection],
  ['otherintersection', otherintersection],
  ['parabola', parabola],
  ['parallelogram', parallelogram],
  ['parallel', parallel],
  ['perpendicular', perpendicular],
  ['polygon', polygon],
  ['polygonalchain', polygonalchain],
  ['reflection', reflection],
  ['sector', sector],
  ['slopefield', slopefield],
  ['slopetriangle', slopetriangle],
  ['spline', spline],
  ['tangent', tangent],
  ['text', text],
  ['tracecurve', tracecurve],
  ['vectorfield', vectorfield],
]

export * from './point'
export * from './line'
export * from './func'
export * from './angle'
export * from './arc'
export * from './arrow'
export * from './circle'
export * from './boxplot'
export * from './axis'
export * from './bisector'
export * from './circumcenter'
export * from './circumcircle'
export * from './conic'
export * from './curve'
export * from './curveboolean'
export * from './derivative'
export * from './ellipse'
export * from './glider'
export * from './hyperbola'
export * from './implicitcurve'
export * from './incenter'
export * from './incircle'
export * from './inequality'
export * from './label'
export * from './intersection'
export * from './measurement'
export * from './midpoint'
export * from './mirror'
export * from './normal'
export * from './projection'
export * from './otherintersection'
export * from './parabola'
export * from './parallelogram'
export * from './parallel'
export * from './perpendicular'
export * from './polygon'
export * from './polygonalchain'
export * from './reflection'
export * from './sector'
export * from './slopefield'
export * from './slopetriangle'
export * from './spline'
export * from './tangent'
export * from './text'
export * from './tracecurve'
export * from './vectorfield'