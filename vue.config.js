module.exports = {
  // chainWebpack: config => {

  // },
  chainWebpack: config => {
    const mediaRule = config.module.rule('media')
    // Removes mp4 from 'media' rule.
    mediaRule.test(/\.(webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
    config.module
      .rule('mp4-media')
      .test(/\.(mp4)$/)
      .use('file-loader')
        .loader('file-loader')
        .options({
          name: '[path][name].[ext]',
        })
        .end()
  }
}
