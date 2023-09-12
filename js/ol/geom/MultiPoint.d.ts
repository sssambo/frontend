export default MultiPoint;
/**
 * @classdesc
 * Multi-point geometry.
 *
 * @api
 */
declare class MultiPoint extends SimpleGeometry {
    /**
     * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
     *     For internal use, flat coordinates in combination with `layout` are also accepted.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(coordinates: Array<import("ol/coordinate.js").Coordinate> | Array<number>, layout?: import("ol/geom/Geometry.js").GeometryLayout | undefined);
    /**
     * Append the passed point to this multipoint.
     * @param {Point} point Point.
     * @api
     */
    appendPoint(point: Point): void;
    /**
     * Make a complete copy of the geometry.
     * @return {!MultiPoint} Clone.
     * @api
     */
    clone(): MultiPoint;
    /**
     * Return the coordinates of the multipoint.
     * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
     * @api
     */
    getCoordinates(): Array<import("ol/coordinate.js").Coordinate>;
    /**
     * Return the point at the specified index.
     * @param {number} index Index.
     * @return {Point} Point.
     * @api
     */
    getPoint(index: number): Point;
    /**
     * Return the points of this multipoint.
     * @return {Array<Point>} Points.
     * @api
     */
    getPoints(): Array<Point>;
    /**
     * Set the coordinates of the multipoint.
     * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     */
    setCoordinates(coordinates: Array<import("ol/coordinate.js").Coordinate>, layout?: import("ol/geom/Geometry.js").GeometryLayout | undefined): void;
}
import SimpleGeometry from 'ol/geom/SimpleGeometry.js';
import Point from 'ol/geom/Point.js';
//# sourceMappingURL=MultiPoint.d.ts.map