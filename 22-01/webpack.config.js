var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  performance:{ //配置 加上这个是检查每个参与者是否做的合适
    hints:'warning',//超过我对每个文件的限制，扔出一个警告。
    maxEntrypointSize:100000,//bytes 定义打包出来的文件bundle.js的大小。
    maxAssetSize:450000,//定义图片或者css的大小

  },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new BabiliPlugin(babiliOptions, overrides)
  ],
};
