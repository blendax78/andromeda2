module.exports = options => {
  return {
    entry: './app/js/index.js',
    output: {
      filename: 'app/static/js/andromeda.js',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              }
            }
          ]
        }
      ]
    }
  }
}
