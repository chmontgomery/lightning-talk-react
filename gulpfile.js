var gulp = require('gulp'),
  livereload = require('gulp-livereload');

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('index.html').on('change', livereload.changed);
});