const withSass = require('@zeit/next-sass')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction
      ? '[local]_[hash:base64:5]'
      : '[name]__[local]___[hash:base64:5]'
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.icon\.svg$/,
      include: [path.resolve(__dirname, 'src/svg/icon')],
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: { dimensions: false }
        }
      ]
    })
    return config
  }
})