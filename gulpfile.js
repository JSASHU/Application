'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var nodemon = require('nodemon');
//var sass = require('gulp-sass');
//var minifyCSS = require('gulp-minify-css');
var react = require('gulp-react');

var paths = {
  views: ['./lib/app/views/*.jsx'],
  //styles: ['./lib/client/sass/main.scss'],
  build: 'build'
};

gulp.task('build:react', function() {
  return gulp.src(paths.views)
        .pipe(react())
        .pipe(browserify({
          transform: ['reactify'],
          insertGlobals: true,
          debug: true
        }))
        .pipe(gulp.dest(paths.build));
});

/*
gulp.task('sass', function () {
  gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.build + '/css'));
});
*/

gulp.task('watch', function() {
  gulp.watch(paths.views, ['build:react']);
  //gulp.watch(paths.styles, ['sass']);
});

gulp.task('start', function () {
  nodemon({
    script: 'lib/server/index.js'
  , env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('build', ['build:react'/*, 'sass'*/]);

gulp.task('default', ['build', 'start']);
gulp.task('develop', ['build', 'start', 'watch']);


