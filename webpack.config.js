const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  // or production
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: __dirname,
    filename: './dist/Code.gs',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new GasPlugin()],
};
