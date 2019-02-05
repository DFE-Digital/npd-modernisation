/*
  nodemon.js
  ===========
  uses nodemon to run a server, watches for javascript and json changes
*/

const fs = require('fs')
const path = require('path')

const gulp = require('gulp')
<<<<<<< HEAD
=======
const colour = require('ansi-colors')
const log = require('fancy-log')
>>>>>>> cc8d92a2e8f42f0f36648db6414dec11c169bf37
const nodemon = require('gulp-nodemon')

const config = require('./config.json')

<<<<<<< HEAD
gulp.task('server', function () {
  nodemon({
    watch: ['.env', '**/*.js', '**/*.json'],
    script: 'server.js',
    ignore: [config.paths.public + '*',
      config.paths.assets + '*',
      config.paths.nodeModules + '*']
  }).on('quit', function () {
    // remove .port.tmp if it exists
    try {
      fs.unlinkSync(path.join(__dirname, '/../.port.tmp'))
    } catch (e) {}

    process.exit(0)
  })
=======
// Warn about npm install on crash
const onCrash = () => {
  log(colour.cyan('[nodemon] For missing modules try running `npm install`'))
}

// Remove .port.tmp if it exists
const onQuit = () => {
  try {
    fs.unlinkSync(path.join(__dirname, '/../.port.tmp'))
  } catch (e) {}

  process.exit(0)
}

gulp.task('server', function () {
  nodemon({
    watch: ['.env', '**/*.js', '**/*.json'],
    script: 'listen-on-port.js',
    ignore: [
      config.paths.public + '*',
      config.paths.assets + '*',
      config.paths.nodeModules + '*'
    ]
  })
    .on('crash', onCrash)
    .on('quit', onQuit)
>>>>>>> cc8d92a2e8f42f0f36648db6414dec11c169bf37
})
