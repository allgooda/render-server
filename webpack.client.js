const path = require('path');

module.exports = {
  // inform webpack that we're building a bundle
  // for node js, rather than for the browser
  target: 'node',

  //Tell webpack the root file of our server
  //application

  entry: './src/client/client.js',

  //tells webpack where to put the output file that is generated.
  output:  {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // tells webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react', 
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}],
          ]
        }
      }
    ]
  }
};