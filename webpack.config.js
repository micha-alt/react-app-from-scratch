const path = require('path');

module.exports = {
  // Default mode: development
  // Can be overriden by commandline arg --mode=production
  mode: "development",

  // Entry Point - the main app file
  entry: './src/app.js',

  // Where and what to build
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "src/build")
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
  }
};
