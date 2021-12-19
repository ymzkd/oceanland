module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/oceanland/'
    : '/',

  transpileDependencies: [
    'vuetify'
  ]
}