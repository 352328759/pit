module.exports = {
	devServer: {
		port: 1718
	},
	publicPath: '/', // 打包的引用路径
	css: {
		loaderOptions: {
			//			sass: {
			//				prependData: `@import "~@/assets/name.scss";`
			//			},
			//			scss: {
			//				prependData: `@import "~@/variables.scss";`
			//			},
			less: {
				globalVars: {
					primary: '#fff'
				}
			}
		}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
	},
}