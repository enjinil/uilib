const { src, dest, watch, parallel } = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

const serve = () => {
  return browserSync.init({
    files: ['./dist/*'],
    server: {
        baseDir: "./dist"
    }
});
}

const views = () => {
  return src('./src/pages/*.pug')
    .pipe(
      pug({pretty: true})
    )
    .pipe(dest('./dist'));
};

const assets = () => {
  return src('./src/assets/**/*', {encoding: false})
    .pipe(dest('./dist/assets'))
}


exports.views = views;
exports.serve = serve;
exports.assets = assets;

exports.build = parallel(views, assets);

exports.default = () => {
  assets()
  watch('./src/**/*.pug', views)
  return serve()
}