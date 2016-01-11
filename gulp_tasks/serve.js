const gulp = require('gulp'),
    browserSync = require('browser-sync').get('PGR2015'),
    inject = require('gulp-inject'),
    modRewrite = require('connect-modrewrite'),
    wiredep = require('wiredep').stream;

module.exports = function () {
    browserSync.init({
        server: {
            baseDir: ['./.tmp'],
            middleware: [
                modRewrite([
                    '^[^\\.]*$ /index.html [L]'
                ])
            ]
        },
        open: false,
        https: true
    });

    gulp.src('app/components/**/*').pipe(gulp.dest('.tmp/components'));

    gulp.src('app/index.html')
        .pipe(inject(gulp.src('.tmp/*.js'), {
            ignorePath: '.tmp/'
        }))
        .pipe(wiredep())
        .pipe(gulp.dest('.tmp'));

    gulp.watch(['app/*.ts', 'app/modules/**/*.ts'], ['ts-watch:serve']);
    gulp.watch(['app/modules/**/*.html'], ['html-watch:serve']);
    gulp.watch(['app/styles/*.scss', 'app/modules/**/*.scss'], ['scss-watch:serve']);
    gulp.watch(['.tmp/*.js', '.tmp/**/*.html'], function () {
        browserSync.reload();
    });
};
