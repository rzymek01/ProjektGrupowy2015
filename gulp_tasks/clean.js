const gulp = require('gulp'),
    clean = require('gulp-clean');

module.exports = function (dir) {
    return function () {
        return gulp.src(dir, {read: false})
            .pipe(clean());
    };
};
