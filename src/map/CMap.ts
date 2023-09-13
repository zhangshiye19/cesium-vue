import * as Cesium from 'cesium'
import {provide} from "vue";


export default class CMap {

    private static instance: CMap;
    viewer: Cesium.Viewer;

    constructor(containerId: string) {
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZWZlNWQ1Ni1jMzY2LTRmODAtYTNhZi0yOGYxMzAwNjZhYTIiLCJpZCI6MTAxNDIxLCJpYXQiOjE2NTc5Mzk5MjJ9.3tNio4pc5M8jcFB_TnVu0yKLy2k8vazv0VSxwgSjRN4';

        this.viewer = new Cesium.Viewer(containerId, {
            animation: false,   // 动画控制控件
            shouldAnimate: true,
            homeButton: true,
            geocoder: true,
            // baseLayerPicker: false,
            timeline: false,
            fullscreenButton: true,
            sceneModePicker: true,
            infoBox: false,
            navigationHelpButton: false,
            navigationInstructionsInitiallyVisible: false,
            selectionIndicator: false
        })

        // arcgis，但是级别不太够
        // const imageryLayers = new Cesium.ImageryLayerCollection();
        // Cesium.ArcGisMapServerImageryProvider
        //     .fromUrl('https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer')
        //     .then(provider => {
        //         // imageryLayers.addImageryProvider(provider)
        //         // this.viewer.imageryLayers = imageryLayers
        //         this.viewer.imageryLayers.addImageryProvider(provider)
        //     })

        // viewer.imageryLayers.addImageryProvider(
        //     await Cesium.IonImageryProvider.fromAssetId(3)
        // );
        // 删除所有图层
        this.viewer.imageryLayers.removeAll()
        // bing map 带标记
        Cesium.IonImageryProvider.fromAssetId(3).then(provide=>{
            this.viewer.imageryLayers.addImageryProvider(provide)
            console.log(this.viewer.imageryLayers)
        })


        // 地形
        Cesium.createWorldTerrainAsync({
            requestWaterMask: true, // 请求水体效果所需要的海岸线数据
            requestVertexNormals: true, // 请求地形照明数据
        }).then(provider => {
            this.viewer.terrainProvider = provider
        });

        // OSM
        Cesium.createOsmBuildingsAsync().then(tile => {
            this.viewer.scene.primitives.add(tile)
        });

        // this.viewer.scene.primitives.add(Cesium.createOsmBuildingsAsync())

        // 去除底部的ion标记
        (this.viewer.cesiumWidget.creditContainer as HTMLElement).style.display = "none";
        // UTC时间+8校准
        this.viewer.clock.currentTime = Cesium.JulianDate.addHours(this.viewer.clock.currentTime, 8, new Cesium.JulianDate());

        // 地形高度检测
        this.viewer.scene.globe.depthTestAgainstTerrain = true;
        this.viewer.terrainShadows = Cesium.ShadowMode.ENABLED;

        // 默认飞回中国
        Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(90,-20,110,90);
    }

    static getInstance(containerId?: string) {
        // containerId = containerId??'cesi'
        if (!this.instance) {
            this.instance = new CMap(containerId ?? 'cesiumContainer')
        }
        return this.instance
    }

}