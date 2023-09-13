import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import viteCompression from 'vite-plugin-compression'
import htmlPlugin from 'vite-plugin-html-config'
import path from 'node:path'
import { normalizePath } from 'vite'

// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  },
  plugins: [
    vue(),
    viteCompression(),
    // viteExternalsPlugin({
    //   cesium: 'Cesium'
    // }),
    htmlPlugin({
      links: [
        { // 默认加载css
          rel: 'stylesheet',
          href: './Widgets/widgets.css'
        }
        // {
        //   rel: 'stylesheet',
        //   href: './ol/ol.css'
        // }
      ],
      scripts: [  // 默认先执行执行脚本
        `window['CESIUM_BASE_URL'] = './'`
      ]
    }),
    viteStaticCopy({
      targets: [  // 静态文件复制，Cesium必要
        {
          src: normalizePath(path.resolve(__dirname,'node_modules/cesium/Build/Cesium/Widgets/*')),
          dest: 'Widgets'
        },
        {
          src: normalizePath(path.resolve(__dirname,'node_modules/cesium/Build/Cesium/Workers/*')),
          dest: 'Workers'
        },
        {
          src: normalizePath(path.resolve(__dirname,'node_modules/cesium/Build/Cesium/Assets/*')),
          dest: 'Assets'
        },
        // {
        //   src: normalizePath(path.resolve(__dirname,'node_modules/ol/ol.css')),
        //   dest: 'ol'
        // }
      ]
    }),
  ],
})
