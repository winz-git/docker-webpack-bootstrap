const path = require('path');

module.exports = {
  entry: './src/js/home.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [

    ]
  }
}