var path = require("path");
module.exports = {
  entry: './src/main.js',

  output: {
     path: path.resolve(__dirname, "build"),
     publicPath: "/",
     filename: "bundle.js"
  },

  resolve: {
  root: [
    path.resolve('./src/'),
  ]
    },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
};
