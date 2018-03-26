var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    app: "./src/js/root.js",
    vendor: ['react']

  },
  devtool:'source-map',//配置source-map
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'],
        }
      },

      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "[name].js" 
  },
  plugins: debug ? [] : [ //这里也是修改的
    new BabiliPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor",
    })
  ],
};
