const gulp = require('gulp'),
    clean = require('gulp-clean');

module.exports = function () {
    return gulp.src('.tmp', {read: false})
        .pipe(clean());
};
