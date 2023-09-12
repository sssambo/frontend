export default Point;
/**
 * @classdesc
 * Point geometry.
 *
 * @api
 */
declare class Point extends SimpleGeometry {
    /**
     * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(coordinates: import("ol/coordinate.js").Coordinate, layout?: import("ol/geom/Geometry.js").GeometryLayout | undefined);
    /**
     * Make a complete copy of the geometry.
     * @return {!Point} Clone.
     * @api
     */
    clone(): Point;
    /**
     * Return the coordinate of the point.
     * @return {import("../coordinate.js").Coordinate} Coordinates.
     * @api
     */
    getCoordinates(): import("ol/coordinate.js").Coordinate;
}
import SimpleGeometry from 'ol/geom/SimpleGeometry.js';
//# sourceMappingURL=Point.d.ts.map