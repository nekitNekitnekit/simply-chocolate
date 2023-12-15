import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import simpleHtmlPlugin from 'vite-plugin-simple-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import zipPack from "vite-plugin-zip-pack";

export default defineConfig({

	base: '/simply-chocolate/',

	css: {
		devSourcemap: true,
	},

	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "partials"),
		}),

		simpleHtmlPlugin({
			minify: true,
		}),

		ViteImageOptimizer({
				exclude: undefined,
				include: undefined,
				includePublic: true,
				logStats: true,
				ansiColors: true,
				svg: {
				multipass: true,
				plugins: [
					{
					name: 'preset-default',
					params: {
						overrides: {
						cleanupNumericValues: false,
						removeViewBox: false,
						},
						cleanupIDs: {
						minify: false,
						remove: false,
						},
						convertPathData: false,
					},
					},
					'sortAttrs',
					{
					name: 'addAttributesToSVGElement',
					params: {
						attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
					},
					},
				],
				},
				png: {
				quality: 90,
				},
				jpeg: {
				quality: 90,
				},
				jpg: {
				quality: 90,
				},
				tiff: {
				quality: 90,
				},
				gif: {},
				webp: {
				lossless: true,
				},
				avif: {
				lossless: true,
				},
				cache: false,
				cacheLocation: undefined,
		}),

		zipPack()
	],

	build: {
        rollupOptions: {
            output: {
                dir: 'dist',
                entryFileNames: 'main.min.js',
                assetFileNames: 'main.min.css',
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            }
        }
    }
});
