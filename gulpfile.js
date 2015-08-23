'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var nodemon = require('nodemon');
var react = require('gulp-react');

var paths = {
  views: ['./lib/app/views/*.jsx'],
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

gulp.task('watch', function() {
  gulp.watch(paths.views, ['build:react']);
});

gulp.task('start', function () {
  nodemon({
    script: 'lib/server/index.js'
  , env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('develop', ['build:react', 'start', 'watch']);
