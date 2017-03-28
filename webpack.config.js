const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
				loader: "vue-loader",
				options: {
		            loaders: {
		                css: ExtractTextPlugin.extract({
		                    use: 'css-loader'
		                }),
		                sass: ExtractTextPlugin.extract({
		                    use: ["css-loader", "sass-loader"]
		                })
		            }
		        }
			},
			{
			    test: /\.(css|scss)$/,
			    use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ["vue-style-loader", "css-loader", "postcss-loader", "sass-loader"]
				})
			},
			{
			    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			    use: [{
			        loader: "url-loader",
			        options: {
			            limit: 10000,
			            name: 'images/[name].[hash:6].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
			        }
			    }]
			},
			{
			    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			    use: [{
			        loader: "url-loader",
			        options: {
			            limit: 10000,
			            name: 'fonts/[name].[hash:6].[ext]'    // 将字体放入fonts文件夹下
			        }
			    }]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    template: './index.html'
		})
	]
}
