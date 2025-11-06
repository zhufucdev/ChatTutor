import pointDoc from './point.doc'
import lineDoc from './line.doc'
import funcDoc from './func.doc'
import angleDoc from './angle.doc'
import arcDoc from './arc.doc'
import arrowDoc from './arrow.doc'
import circleDoc from './circle.doc'
import boxplotDoc from './boxplot.doc'
import axisDoc from './axis.doc'
import bisectorDoc from './bisector.doc'
import circumcenterDoc from './circumcenter.doc'
import circumcircleDoc from './circumcircle.doc'
import conicDoc from './conic.doc'
import curveDoc from './curve.doc'
import curvebooleanDoc from './curveboolean.doc'
import derivativeDoc from './derivative.doc'
import ellipseDoc from './ellipse.doc'
import gliderDoc from './glider.doc'
import hyperbolaDoc from './hyperbola.doc'
import implicitcurveDoc from './implicitcurve.doc'
import incenterDoc from './incenter.doc'
import incircleDoc from './incircle.doc'
import inequalityDoc from './inequality.doc'
import labelDoc from './label.doc'
import intersectionDoc from './intersection.doc'
import measurementDoc from './measurement.doc'
import midpointDoc from './midpoint.doc'
import mirrorDoc from './mirror.doc'
import normalDoc from './normal.doc'
import projectionDoc from './projection.doc'
import otherintersectionDoc from './otherintersection.doc'
import parabolaDoc from './parabola.doc'
import parallelogramDoc from './parallelogram.doc'
import parallelDoc from './parallel.doc'
import perpendicularDoc from './perpendicular.doc'
import polygonDoc from './polygon.doc'
import polygonalchainDoc from './polygonalchain.doc'
import reflectionDoc from './reflection.doc'
import sectorDoc from './sector.doc'
import slopefieldDoc from './slopefield.doc'
import slopetriangleDoc from './slopetriangle.doc'
import splineDoc from './spline.doc'
import tangentDoc from './tangent.doc'
import textDoc from './text.doc'
import tracecurveDoc from './tracecurve.doc'
import vectorfieldDoc from './vectorfield.doc'

export * from '../document'

// Essential elements - commonly needed in most teaching scenarios
// These cover basic shapes, functions, text, and fundamental relational operations
export const essentialDocs = [
  // Basic geometric elements
  pointDoc,
  lineDoc,
  circleDoc,
  polygonDoc,
  angleDoc,

  // Functions and curves
  funcDoc,

  // Text and annotations
  textDoc,
  arrowDoc,

  // Essential relational elements
  gliderDoc,           // Interactive points on elements
  intersectionDoc,     // Finding intersections
  midpointDoc,        // Common construction
  perpendicularDoc,   // Perpendicular constructions
  parallelDoc,        // Parallel constructions
  tangentDoc,         // Tangents to curves/circles
  derivativeDoc,      // Derivative visualization

  // Symmetry and transformations
  mirrorDoc,
  reflectionDoc,
]

// Extended elements - useful for specific topics or advanced visualization
// The AI can choose these based on the teaching context
export const extendedDocs = [
  // Advanced curves and shapes
  arcDoc,
  sectorDoc,
  ellipseDoc,
  hyperbolaDoc,
  parabolaDoc,
  conicDoc,

  // Advanced curve operations
  curveDoc,
  implicitcurveDoc,
  curvebooleanDoc,
  splineDoc,

  // Triangle-specific constructions
  circumcenterDoc,
  circumcircleDoc,
  incenterDoc,
  incircleDoc,
  bisectorDoc,

  // Specialized relational elements
  projectionDoc,
  otherintersectionDoc,
  normalDoc,

  // Specialized shapes
  parallelogramDoc,
  polygonalchainDoc,

  // Advanced visualizations
  slopefieldDoc,
  vectorfieldDoc,
  slopetriangleDoc,
  tracecurveDoc,
  inequalityDoc,

  // Utilities
  axisDoc,
  measurementDoc,
  labelDoc,
  boxplotDoc,
]

// Default export includes all elements for backward compatibility
export default [...essentialDocs, ...extendedDocs]

