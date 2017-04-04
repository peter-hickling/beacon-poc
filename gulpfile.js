"use strict.";

let gulp = require('gulp');
let karma = require('karma').Server;
let jshint = require('gulp-jshint');
let connect = require('gulp-connect');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

gulp.task('lint', function () {
    return gulp.src(['client/*.js', 'test-backend/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('unit', function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.ci.js'
    }, done).start();
});

gulp.task('browserify', function() {
  return browserify({ entries: ['client/main.js'] })
    .bundle()
    .pipe(source("appBundle.js"))
    .pipe(gulp.dest('./'))
});

gulp.task('frontend', ['browserify'], function() {
    connect.server({
        port: 8080,
        fallback: 'index.html'
    });
});

gulp.task('default', ['lint', 'unit']);
