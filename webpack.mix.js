let DashboardPlugin = require('webpack-dashboard/plugin');
let CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
let mix = require('laravel-mix');


// ? ========== DEVELOPMENT SETTINGS ==========
if(!mix.inProduction()){
  mix.setPublicPath('public/build/')
     .js("./src/js/app.js", "js")
     .sass("./src/scss/app.scss", 'css')
     .sourceMaps(true, 'source-map');
  mix.webpackConfig({
      output: {
        publicPath: "http://0.0.0.0:8080/",
      },
      devServer:{
        host: '0.0.0.0',
        port: 8080,
        sockHost: '0.0.0.0',
        sockPort: 8080,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      },
      plugins: [
        new DashboardPlugin(),
      ],
    })
    ;
} else {
  // ? ========== PRODUCTION SETTINGS ==========
  mix.webpackConfig({
    output: {
      path: path.resolve(__dirname, 'public/assets/dist'),
      publicPath: 'assets/dist/',
      chunkFilename: "js/components/[name].[chunkhash:8].js",
    },
    plugins: [
      new CleanObsoleteChunks(),
    ]
  });
  mix.setPublicPath('public/assets/dist')
      .js('./src/js/app.js', 'js')
      .sass('./src/scss/app.scss', 'css')
      .options({
        postCss: [
          require('autoprefixer')({
            grid: true,
          }),
        ],
      })
      .version()
}

  mix.disableNotifications();