export default Circle;
/**
 * @classdesc
 * Circle geometry.
 *
 * @api
 */
declare class Circle extends SimpleGeometry {
    /**
     * @param {!import("../coordinate.js").Coordinate} center Center.
     *     For internal use, flat coordinates in combination with `layout` and no
     *     `radius` are also accepted.
     * @param {number} [radius] Radius in units of the projection.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(center: import("ol/coordinate.js").Coordinate, radius?: number | undefined, layout?: import("ol/geom/Geometry.js").GeometryLayout | undefined);
    /**
     * Make a complete copy of the geometry.
     * @return {!Circle} Clone.
     * @api
     */
    clone(): Circle;
    /**
     * Return the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
     * @return {import("../coordinate.js").Coordinate} Center.
     * @api
     */
    getCenter(): import("ol/coordinate.js").Coordinate;
    /**
     * Return the radius of the circle.
     * @return {number} Radius.
     * @api
     */
    getRadius(): number;
    /**
     * @private
     * @return {number} Radius squared.
     */
    private getRadiusSquared_;
    /**
     * Set the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
     * @param {import("../coordinate.js").Coordinate} center Center.
     * @api
     */
    setCenter(center: import("ol/coordinate.js").Coordinate): void;
    /**
     * Set the center (as {@link module:ol/coordinate~Coordinate coordinate}) and the radius (as
     * number) of the circle.
     * @param {!import("../coordinate.js").Coordinate} center Center.
     * @param {number} radius Radius.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     */
    setCenterAndRadius(center: import("ol/coordinate.js").Coordinate, radius: number, layout?: import("ol/geom/Geometry.js").GeometryLayout | undefined): void;
    getCoordinates(): null;
    setCoordinates(coordinates: any, layout: any): void;
    /**
     * Set the radius of the circle. The radius is in the units of the projection.
     * @param {number} radius Radius.
     * @api
     */
    setRadius(radius: number): void;
}
import SimpleGeometry from 'ol/geom/SimpleGeometry.js';
//# sourceMappingURL=Circle.d.ts.map