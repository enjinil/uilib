const { src, dest, watch } = require('gulp');
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


exports.views = views;
exports.serve = serve;
exports.default = () => {
  watch('./src/**/*.pug', views)
  return serve()
}