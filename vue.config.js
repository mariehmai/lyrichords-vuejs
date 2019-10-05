module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'test') {
      const sassRule = config.module.rule('sass');
      sassRule.uses.clear();
      sassRule.use('null-loader').loader('null-loader');
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
