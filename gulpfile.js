"use strict.";

let gulp = require('gulp');
let karma = require('karma').Server;
let jshint = require('gulp-jshint');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

gulp.task('lint', () => {
    return gulp.src(['client/*.js', 'test-backend/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('unit', done => {
    new karma({
        configFile: __dirname + '/karma.conf.ci.js'
    }, done).start();
});

gulp.task('browserify', () => {
  return browserify({ entries: ['src/client/main.js'] })
    .bundle()
    .pipe(source("appBundle.js"))
    .pipe(gulp.dest('./src/backend/static/'))
});

gulp.task('default', ['lint', 'unit']);
