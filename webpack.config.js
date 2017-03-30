const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.join(__dirname + '/dist'),
		publicPath: '',
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[id].chunk.[chunkhash:8].js'
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
					fallback: 'vue-style-loader',
					use: ["css-loader", "postcss-loader", "sass-loader"]
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
            filename: 'css/index.[contenthash:8].css'
        }),
		/*new webpack.optimize.CommonsChunkPlugin({
			//name: 'vendor',
			filename: '[name].[chunkhash].js',
			minChunks: Infinity
	    }),*/
		new HtmlWebpackHarddiskPlugin(),
		new HtmlWebpackPlugin({
			alwaysWriteToDisk: true,
		    filename: 'index.html',
		    template: './src/index.html',
			chunks: ['index']
		})
	],
	resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        alias: {
            libs: path.resolve('./src/libs'),
            utils: path.resolve('./src/utils'),
            scss: path.resolve('./src/scss'),
            css: path.resolve('./src/css'),
            img: path.resolve('./src/images'),
            api: path.resolve('./src/api'),
            cpn: path.resolve('./src/components'),
            routes: path.resolve('./src/routes'),
            data: path.resolve('./src/data')
        },
        modules: ['node_modules']
    }
}
