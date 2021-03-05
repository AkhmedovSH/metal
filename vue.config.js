const version = '1.' + Math.floor(Math.random() * 100)

module.exports = {
  lintOnSave: false,
  publicPath: './',
	
  configureWebpack: (config) => {
		config.output.filename = `js/[name].${version}.js`;
		config.output.chunkFilename = `js/[name].${version}.js`;
	},

  chainWebpack: config => {
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: `css/[name].${version}.css`,
            chunkFilename: `css/[name].${version}.css`
          }
        ]);
    }
  }
  
}
