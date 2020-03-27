
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Default mode: development
  // Can be overriden by commandline arg --mode=production
  mode: "development",

  // Entry Point - the main app file
  entry: './src/main.js',

  // Where and what to build
  output: {
    filename: "app.bundle.js"
  },

  // Default file extensions (may be omitted)
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // Loaders (special handling for file types - beside just bundling ECMAScript)
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

  // Plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // Development Server
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
};
