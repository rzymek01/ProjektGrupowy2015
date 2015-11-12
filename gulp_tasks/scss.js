const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').get('PGR2015');

module.exports = function () {
    return gulp.src(['app/styles/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(browserSync.stream());
};
