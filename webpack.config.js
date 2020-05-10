module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['to-string-loader', 'css-loader'],
      },
    ],
  },
};
