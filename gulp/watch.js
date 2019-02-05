/*
  watch.js
  ===========
  watches sass/js/images
*/

const gulp = require('gulp')
<<<<<<< HEAD
const config = require('./config.json')

gulp.task('watch-sass', function () {
  return gulp.watch(config.paths.assets + 'sass/**', {cwd: './'}, ['sass'])
=======

const config = require('./config.json')

gulp.task('watch-sass', function () {
  return gulp.watch(config.paths.assets + 'sass/**', { cwd: './' }, gulp.task('sass'))
>>>>>>> cc8d92a2e8f42f0f36648db6414dec11c169bf37
})

gulp.task('watch-assets', function () {
  return gulp.watch([config.paths.assets + 'images/**',
<<<<<<< HEAD
    config.paths.assets + 'javascripts/**'], {cwd: './'}, ['copy-assets'])
=======
    config.paths.assets + 'javascripts/**'], { cwd: './' }, gulp.task('copy-assets'))
>>>>>>> cc8d92a2e8f42f0f36648db6414dec11c169bf37
})

// Backward compatibility with Elements

gulp.task('watch-sass-v6', function () {
<<<<<<< HEAD
  return gulp.watch(config.paths.v6Assets + 'sass/**', {cwd: './'}, ['sass-v6'])
=======
  return gulp.watch(config.paths.v6Assets + 'sass/**', { cwd: './' }, gulp.task('sass-v6'))
>>>>>>> cc8d92a2e8f42f0f36648db6414dec11c169bf37
})

gulp.task('watch-assets-v6', function () {
  return gulp.watch([config.paths.v6Assets + 'images/**',
<<<<<<< HEAD
    config.paths.v6Assets + 'javascripts/**'], {cwd: './'}, ['copy-assets-v6'])
=======
    config.paths.v6Assets + 'javascripts/**'], { cwd: './' }, gulp.task('copy-assets-v6'))
>>>>>>> cc8d92a2e8f42f0f36648db6414dec11c169bf37
})
