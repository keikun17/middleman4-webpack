module.exports = {
  entry: "./source/javascripts/entry.es6",
  output: {
    path: "./source/javascripts",
    filename: "bundle.js",
    sourceMapFilename: "bundle.map"

  },

  module: {
    loaders: [

      // React and ES6
      {
        test: /\.(jsx|js|es6)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ['es2015']
        }
          // optional: ['runtime'],
          // stage: 0}
      }

    ]
  },

  // externals: {
  //   'react': 'React'
  // },
  //
  resolve: {
    extensions: ['', '.jsx', '.json', '.es6', '.js']
  },

  node: {
    fs: "empty"
  }
}

