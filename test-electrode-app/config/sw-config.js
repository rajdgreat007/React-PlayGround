module.exports = {
  cache: {
    cacheId: "test-electrode-app",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "test-electrode-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
