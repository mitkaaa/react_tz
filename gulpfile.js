'use strict'

var config = require('./config'),
    gulp = require('gulp')

gulp.config = {
    dest: config.PATH.STATIC
}

console.log(process.env.NODE_ENV)

require('./gulp/webpack')(gulp)
require('./gulp/esLint')(gulp)

gulp.task('default', ['lint', 'webpack'])
gulp.task('production', ['webpack:production'])
