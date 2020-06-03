var path = require("path")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist", "assets"),
		filename: "bundle.js",
		publicPath: "dist/temp/",
	},
	devServer: {
		contentBase: "./",
		host: "localhost",
		compress: true,
		port: 1717
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
}