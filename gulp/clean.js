/*
  clean.js
  ===========
  removes folders:
    - public
*/

<<<<<<< HEAD
const gulp = require('gulp')
const clean = require('gulp-clean')

const config = require('./config.json')

gulp.task('clean', function () {
  return gulp.src([config.paths.public + '/*',
    '.port.tmp'], {read: false})
    .pipe(clean())
=======
const del = require('del')
const gulp = require('gulp')

const config = require('./config.json')

gulp.task('clean', function (done) {
  return del([config.paths.public + '/*',
    '.port.tmp'])
>>>>>>> cc8d92a2e8f42f0f36648db6414dec11c169bf37
})
