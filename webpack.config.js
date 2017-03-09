const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname + '/dist'),
		publicPath: '',
		filename: 'js/index.js'
	},
	module: {
		rules: [
			{
                test: /\.js$/,
                use: "babel-loader",
                include: [path.resolve(__dirname, 'src')]
            },
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	}
}