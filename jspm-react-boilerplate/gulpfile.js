'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('serve');
  // gulp.start('build');
});
