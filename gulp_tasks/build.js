const gulp = require('gulp'),
    webpack = require('webpack-stream');

module.exports = function () {
    gulp.src(['app/*.ts', 'app/modules/**/*.ts'])
        .pipe(webpack({
            module: {
                loaders: [
                    { test: /\.ts$/, loader: 'babel!ts' }
                ]
            },
            resolve: {
                extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
            }
        }))
        .pipe(gulp.dest('dist'));
};
