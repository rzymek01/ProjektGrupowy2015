const gulp = require('gulp'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream,
    webpack = require('webpack-stream'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    sass = require('gulp-sass');

module.exports = {
    vendor: function () {
        return gulp.src('app/index.html')
            .pipe(wiredep())
            .pipe(usemin({
                js: [uglify(), rev()]
            }))
            .pipe(gulp.dest('dist'));
    },
    webpack: function () {
        return gulp.src(['app/*.ts', 'app/modules/**/*.ts'])
            .pipe(webpack({
                module: {
                    loaders: [
                        {test: /\.ts$/, loader: 'babel!ts'}
                    ]
                },
                resolve: {
                    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
                },
                output: {
                    filename: 'app.js'
                }
            }))
            .pipe(gulp.dest('dist'));
    },
    inject: function () {
        return gulp.src('app/index.html')
            .pipe(inject(gulp.src('dist/*.js', {read: false}), {
                ignorePath: 'dist/',
                addRootSlash: false
            }))
            .pipe(gulp.dest('dist'));
    },
    scripts: function () {
        return gulp.src('dist/index.html')
            .pipe(wiredep())
            .pipe(usemin({
                js: [uglify(), rev()]
            }))
            .pipe(gulp.dest('dist'));
    },
    styles: function () {
        return gulp.src(['app/styles/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist'));
    }
};
