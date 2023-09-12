export default VectorContext;
/**
 * @module ol/render/VectorContext
 */
/**
 * @classdesc
 * Context for drawing geometries.  A vector context is available on render
 * events and does not need to be constructed directly.
 * @api
 */
declare class VectorContext {
    /**
     * Render a geometry with a custom renderer.
     *
     * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {Function} renderer Renderer.
     * @param {Function} hitDetectionRenderer Renderer.
     */
    drawCustom(geometry: import("ol/geom/SimpleGeometry.js").default, feature: import("ol/Feature.js").FeatureLike, renderer: Function, hitDetectionRenderer: Function): void;
    /**
     * Render a geometry.
     *
     * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
     */
    drawGeometry(geometry: import("ol/geom/Geometry.js").default): void;
    /**
     * Set the rendering style.
     *
     * @param {import("../style/Style.js").default} style The rendering style.
     */
    setStyle(style: import("ol/style/Style.js").default): void;
    /**
     * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
     * @param {import("../Feature.js").default} feature Feature.
     */
    drawCircle(circleGeometry: import("ol/geom/Circle.js").default, feature: import("ol/Feature.js").default): void;
    /**
     * @param {import("../Feature.js").default} feature Feature.
     * @param {import("../style/Style.js").default} style Style.
     */
    drawFeature(feature: import("ol/Feature.js").default, style: import("ol/style/Style.js").default): void;
    /**
     * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
     * @param {import("../Feature.js").default} feature Feature.
     */
    drawGeometryCollection(geometryCollectionGeometry: import("ol/geom/GeometryCollection.js").default, feature: import("ol/Feature.js").default): void;
    /**
     * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     */
    drawLineString(lineStringGeometry: import("ol/geom/LineString.js").default | import("ol/render/Feature.js").default, feature: import("ol/Feature.js").FeatureLike): void;
    /**
     * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     */
    drawMultiLineString(multiLineStringGeometry: import("ol/geom/MultiLineString.js").default | import("ol/render/Feature.js").default, feature: import("ol/Feature.js").FeatureLike): void;
    /**
     * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     */
    drawMultiPoint(multiPointGeometry: import("ol/geom/MultiPoint.js").default | import("ol/render/Feature.js").default, feature: import("ol/Feature.js").FeatureLike): void;
    /**
     * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     */
    drawMultiPolygon(multiPolygonGeometry: import("ol/geom/MultiPolygon.js").default, feature: import("ol/Feature.js").FeatureLike): void;
    /**
     * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     */
    drawPoint(pointGeometry: import("ol/geom/Point.js").default | import("ol/render/Feature.js").default, feature: import("ol/Feature.js").FeatureLike): void;
    /**
     * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     */
    drawPolygon(polygonGeometry: import("ol/geom/Polygon.js").default | import("ol/render/Feature.js").default, feature: import("ol/Feature.js").FeatureLike): void;
    /**
     * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     */
    drawText(geometry: import("ol/geom/SimpleGeometry.js").default | import("ol/render/Feature.js").default, feature: import("ol/Feature.js").FeatureLike): void;
    /**
     * @param {import("../style/Fill.js").default} fillStyle Fill style.
     * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
     */
    setFillStrokeStyle(fillStyle: import("ol/style/Fill.js").default, strokeStyle: import("ol/style/Stroke.js").default): void;
    /**
     * @param {import("../style/Image.js").default} imageStyle Image style.
     * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
     */
    setImageStyle(imageStyle: import("ol/style/Image.js").default, declutterImageWithText?: {
        [x: number]: import("ol/render/canvas/Executor.js").ReplayImageOrLabelArgs;
    } | undefined): void;
    /**
     * @param {import("../style/Text.js").default} textStyle Text style.
     * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
     */
    setTextStyle(textStyle: import("ol/style/Text.js").default, declutterImageWithText?: {
        [x: number]: import("ol/render/canvas/Executor.js").ReplayImageOrLabelArgs;
    } | undefined): void;
}
//# sourceMappingURL=VectorContext.d.ts.map