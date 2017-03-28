"use strict.";

let gulp = require('gulp');
let karma = require('karma').Server;
let jshint = require('gulp-jshint');
let connect = require('gulp-connect');
let browserify = require('gulp-browserify');
let rename = require('gulp-rename');

gulp.task('lint', function () {
    return gulp.src(['app/**/*.js', 'app/*.js', 'specs/**/*.js', '*.js'])
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
  gulp.src('src/websocket-client.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('frontend', ['browserify'], function() {
    connect.server({
        port: 8080,
        fallback: 'index.html'
    });
});

gulp.task('default', ['lint', 'unit']);
