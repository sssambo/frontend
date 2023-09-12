export default VectorTile;
declare class VectorTile extends Tile {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {string} src Data source url.
     * @param {import("./format/Feature.js").default} format Feature format.
     * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("./Tile.js").Options} [options] Tile options.
     */
    constructor(tileCoord: import("ol/tilecoord.js").TileCoord, state: any, src: string, format: import("ol/format/Feature.js").default, tileLoadFunction: import("ol/Tile.js").LoadFunction, options?: import("ol/Tile.js").Options | undefined);
    /**
     * Extent of this tile; set by the source.
     * @type {import("./extent.js").Extent}
     */
    extent: import("ol/extent.js").Extent;
    /**
     * @private
     * @type {import("./format/Feature.js").default}
     */
    private format_;
    /**
     * @private
     * @type {Array<import("./Feature.js").default>}
     */
    private features_;
    /**
     * @private
     * @type {import("./featureloader.js").FeatureLoader}
     */
    private loader_;
    /**
     * Feature projection of this tile; set by the source.
     * @type {import("./proj/Projection.js").default}
     */
    projection: import("ol/proj/Projection.js").default;
    /**
     * Resolution of this tile; set by the source.
     * @type {number}
     */
    resolution: number;
    /**
     * @private
     * @type {import("./Tile.js").LoadFunction}
     */
    private tileLoadFunction_;
    /**
     * @private
     * @type {string}
     */
    private url_;
    /**
     * Get the feature format assigned for reading this tile's features.
     * @return {import("./format/Feature.js").default} Feature format.
     * @api
     */
    getFormat(): import("ol/format/Feature.js").default;
    /**
     * Get the features for this tile. Geometries will be in the view projection.
     * @return {Array<import("./Feature.js").FeatureLike>} Features.
     * @api
     */
    getFeatures(): Array<import("ol/Feature.js").FeatureLike>;
    /**
     * Handler for successful tile load.
     * @param {Array<import("./Feature.js").default>} features The loaded features.
     * @param {import("./proj/Projection.js").default} dataProjection Data projection.
     */
    onLoad(features: Array<import("ol/Feature.js").default>, dataProjection: import("ol/proj/Projection.js").default): void;
    /**
     * Handler for tile load errors.
     */
    onError(): void;
    /**
     * Function for use in an {@link module:ol/source/VectorTile~VectorTile}'s `tileLoadFunction`.
     * Sets the features for the tile.
     * @param {Array<import("./Feature.js").default>} features Features.
     * @api
     */
    setFeatures(features: Array<import("ol/Feature.js").default>): void;
    /**
     * Set the feature loader for reading this tile's features.
     * @param {import("./featureloader.js").FeatureLoader} loader Feature loader.
     * @api
     */
    setLoader(loader: import("ol/featureloader.js").FeatureLoader): void;
}
import Tile from 'ol/Tile.js';
//# sourceMappingURL=VectorTile.d.ts.map