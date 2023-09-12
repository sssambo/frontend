export default VectorRenderTile;
export type ReplayState = {
    /**
     * Dirty.
     */
    dirty: boolean;
    /**
     * RenderedRenderOrder.
     */
    renderedRenderOrder: null | import("ol/render.js").OrderFunction;
    /**
     * RenderedTileRevision.
     */
    renderedTileRevision: number;
    /**
     * RenderedResolution.
     */
    renderedResolution: number;
    /**
     * RenderedRevision.
     */
    renderedRevision: number;
    /**
     * RenderedTileResolution.
     */
    renderedTileResolution: number;
    /**
     * RenderedTileZ.
     */
    renderedTileZ: number;
};
declare class VectorRenderTile extends Tile {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {import("./tilecoord.js").TileCoord} urlTileCoord Wrapped tile coordinate for source urls.
     * @param {function(VectorRenderTile):Array<import("./VectorTile").default>} getSourceTiles Function
     * to get source tiles for this tile.
     */
    constructor(tileCoord: import("ol/tilecoord.js").TileCoord, state: any, urlTileCoord: import("ol/tilecoord.js").TileCoord, getSourceTiles: (arg0: VectorRenderTile) => Array<import("ol/VectorTile").default>);
    /**
     * @private
     * @type {!Object<string, CanvasRenderingContext2D>}
     */
    private context_;
    /**
     * Executor groups by layer uid. Entries are read/written by the renderer.
     * @type {Object<string, Array<import("./render/canvas/ExecutorGroup.js").default>>}
     */
    executorGroups: {
        [x: string]: Array<import("ol/render/canvas/ExecutorGroup.js").default>;
    };
    /**
     * Executor groups for decluttering, by layer uid. Entries are read/written by the renderer.
     * @type {Object<string, Array<import("./render/canvas/ExecutorGroup.js").default>>}
     */
    declutterExecutorGroups: {
        [x: string]: Array<import("ol/render/canvas/ExecutorGroup.js").default>;
    };
    /**
     * Number of loading source tiles. Read/written by the source.
     * @type {number}
     */
    loadingSourceTiles: number;
    /**
     * @type {Object<number, ImageData>}
     */
    hitDetectionImageData: {
        [x: number]: ImageData;
    };
    /**
     * @private
     * @type {!Object<string, ReplayState>}
     */
    private replayState_;
    /**
     * @type {Array<import("./VectorTile.js").default>}
     */
    sourceTiles: Array<import("ol/VectorTile.js").default>;
    /**
     * @type {Object<string, boolean>}
     */
    errorTileKeys: {
        [x: string]: boolean;
    };
    /**
     * @type {number}
     */
    wantedResolution: number;
    /**
     * @type {!function():Array<import("./VectorTile.js").default>}
     */
    getSourceTiles: () => Array<import("ol/VectorTile.js").default>;
    /**
     * @type {import("./tilecoord.js").TileCoord}
     */
    wrappedTileCoord: import("ol/tilecoord.js").TileCoord;
    /**
     * @param {import("./layer/Layer.js").default} layer Layer.
     * @return {CanvasRenderingContext2D} The rendering context.
     */
    getContext(layer: import("ol/layer/Layer.js").default): CanvasRenderingContext2D;
    /**
     * @param {import("./layer/Layer.js").default} layer Layer.
     * @return {boolean} Tile has a rendering context for the given layer.
     */
    hasContext(layer: import("ol/layer/Layer.js").default): boolean;
    /**
     * Get the Canvas for this tile.
     * @param {import("./layer/Layer.js").default} layer Layer.
     * @return {HTMLCanvasElement} Canvas.
     */
    getImage(layer: import("ol/layer/Layer.js").default): HTMLCanvasElement;
    /**
     * @param {import("./layer/Layer.js").default} layer Layer.
     * @return {ReplayState} The replay state.
     */
    getReplayState(layer: import("ol/layer/Layer.js").default): ReplayState;
}
import Tile from 'ol/Tile.js';
//# sourceMappingURL=VectorRenderTile.d.ts.map