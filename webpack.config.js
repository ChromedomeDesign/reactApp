const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
   entry: './src/main.jsx',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
      ]
   },
   resolve: {
     extensions: ['.tsx', '.ts', '.js'],
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
}