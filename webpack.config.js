const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//const css = require('./test.css');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }

    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  mode: 'development',
  watch: true,
  plugins: [
    new VueLoaderPlugin()
  ]
};