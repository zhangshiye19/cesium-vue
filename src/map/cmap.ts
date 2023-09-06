import * as Cesium from 'cesium'


export default class CMap {

    private static instance: CMap;
    viewer: Cesium.Viewer;

    constructor(containerId: string) {
        this.viewer = new Cesium.Viewer(containerId,{
            infoBox: false
        })
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new CMap('cesiumContainer')
        }
        return this.instance
    }

}