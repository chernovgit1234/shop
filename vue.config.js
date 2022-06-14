module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ` @import "@/assets/styles.scss"; `
            }
        }
    },
/*     devServer: {
        proxy: {
          '^/api': {
            target: 'http://localhost:3080',
            changeOrigin: true
          },
        }
    } */
}