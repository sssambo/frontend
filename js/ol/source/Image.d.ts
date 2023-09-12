/**
 * Default image load function for image sources that use import("../Image.js").Image image
 * instances.
 * @param {import("../Image.js").default} image Image.
 * @param {string} src Source.
 */
export function defaultImageLoadFunction(image: import("ol/Image.js").default, src: string): void;
/**
 * Adjusts the extent so it aligns with pixel boundaries.
 * @param {import("../extent.js").Extent} extent Extent.
 * @param {number} resolution Reolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} ratio Ratio between request size and view size.
 * @return {import("../extent.js").Extent} Request extent.
 */
export function getRequestExtent(extent: import("ol/extent.js").Extent, resolution: number, pixelRatio: number, ratio: number): import("ol/extent.js").Extent;
export type ImageSourceEventType = string;
export namespace ImageSourceEventType {
    let IMAGELOADSTART: string;
    let IMAGELOADEND: string;
    let IMAGELOADERROR: string;
}
/**
 * @typedef {'imageloadend'|'imageloaderror'|'imageloadstart'} ImageSourceEventTypes
 */
/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Image~ImageSource} instances are instances of this
 * type.
 */
export class ImageSourceEvent extends Event {
    /**
     * @param {string} type Type.
     * @param {import("../Image.js").default} image The image.
     */
    constructor(type: string, image: import("ol/Image.js").default);
    /**
     * The image related to the event.
     * @type {import("../Image.js").default}
     * @api
     */
    image: import("ol/Image.js").default;
}
export default ImageSource;
export type ImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
/**
 * *
 */
export type ImageSourceOnSignature<Return> = import("ol/Observable").OnSignature<import("ol/Observable").EventTypes, import("ol/events/Event.js").default, Return> & import("ol/Observable").OnSignature<import("ol/ObjectEventType").Types, import("ol/Object").ObjectEvent, Return> & import("ol/Observable").OnSignature<ImageSourceEventTypes, ImageSourceEvent, Return> & import("ol/Observable").CombinedOnSignature<import("ol/Observable").EventTypes | import("ol/ObjectEventType").Types | ImageSourceEventTypes, Return>;
export type Options = {
    /**
     * Attributions.
     */
    attributions?: import("ol/source/Source.js").AttributionLike | undefined;
    /**
     * Use interpolated values when resampling.  By default,
     * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
     */
    interpolate?: boolean | undefined;
    /**
     * Loader. Can either be a custom loader, or one of the
     * loaders created with a `createLoader()` function ({@link module :ol/source/wms.createLoader wms},
     * {@link module :ol/source/arcgisRest.createLoader arcgisRest}, {@link module :ol/source/mapguide.createLoader mapguide},
     * {@link module :ol/source/static.createLoader static}).
     */
    loader?: import("ol/Image.js").Loader | undefined;
    /**
     * Projection.
     */
    projection?: import("ol/proj.js").ProjectionLike;
    /**
     * Resolutions.
     */
    resolutions?: number[] | undefined;
    /**
     * State.
     */
    state?: import("ol/source/Source.js").State | undefined;
};
import Event from 'ol/events/Event.js';
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<ImageSourceEventTypes, ImageSourceEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types
 *     |ImageSourceEventTypes, Return>} ImageSourceOnSignature
 */
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {import("../Image.js").Loader} [loader] Loader. Can either be a custom loader, or one of the
 * loaders created with a `createLoader()` function ({@link module:ol/source/wms.createLoader wms},
 * {@link module:ol/source/arcgisRest.createLoader arcgisRest}, {@link module:ol/source/mapguide.createLoader mapguide},
 * {@link module:ol/source/static.createLoader static}).
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {Array<number>} [resolutions] Resolutions.
 * @property {import("./Source.js").State} [state] State.
 */
/**
 * @classdesc
 * Base class for sources providing a single image.
 * @fires module:ol/source/Image.ImageSourceEvent
 * @api
 */
declare class ImageSource extends Source {
    /**
     * @param {Options} options Single image source options.
     */
    constructor(options: Options);
    /***
     * @type {ImageSourceOnSignature<import("../events").EventsKey>}
     */
    on: ImageSourceOnSignature<import("ol/events").EventsKey>;
    /***
     * @type {ImageSourceOnSignature<import("../events").EventsKey>}
     */
    once: ImageSourceOnSignature<import("ol/events").EventsKey>;
    /***
     * @type {ImageSourceOnSignature<void>}
     */
    un: ImageSourceOnSignature<void>;
    /**
     * @protected
     * @type {import("../Image.js").Loader}
     */
    protected loader: import("ol/Image.js").Loader;
    /**
     * @private
     * @type {Array<number>|null}
     */
    private resolutions_;
    /**
     * @private
     * @type {import("../reproj/Image.js").default}
     */
    private reprojectedImage_;
    /**
     * @private
     * @type {number}
     */
    private reprojectedRevision_;
    /**
     * @protected
     * @type {import("../Image.js").default}
     */
    protected image: import("ol/Image.js").default;
    /**
     * @private
     * @type {import("../extent.js").Extent}
     */
    private wantedExtent_;
    /**
     * @private
     * @type {number}
     */
    private wantedResolution_;
    /**
     * @private
     * @type {boolean}
     */
    private static_;
    /**
     * @return {Array<number>|null} Resolutions.
     */
    getResolutions(): Array<number> | null;
    /**
     * @param {Array<number>|null} resolutions Resolutions.
     */
    setResolutions(resolutions: Array<number> | null): void;
    /**
     * @protected
     * @param {number} resolution Resolution.
     * @return {number} Resolution.
     */
    protected findNearestResolution(resolution: number): number;
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../Image.js").default} Single image.
     */
    getImage(extent: import("ol/extent.js").Extent, resolution: number, pixelRatio: number, projection: import("ol/proj/Projection.js").default): import("ol/Image.js").default;
    /**
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../Image.js").default} Single image.
     * @protected
     */
    protected getImageInternal(extent: import("ol/extent.js").Extent, resolution: number, pixelRatio: number, projection: import("ol/proj/Projection.js").default): import("ol/Image.js").default;
    /**
     * Handle image change events.
     * @param {import("../events/Event.js").default} event Event.
     * @protected
     */
    protected handleImageChange(event: import("ol/events/Event.js").default): void;
}
import Source from 'ol/source/Source.js';
//# sourceMappingURL=Image.d.ts.map