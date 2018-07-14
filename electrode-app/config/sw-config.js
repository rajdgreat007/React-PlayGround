module.exports = {
  cache: {
    cacheId: "electrode-app",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
