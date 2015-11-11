const gulp = require('gulp');

const browserSync = require('browser-sync').create('PGR2015'),
    serve = require('./gulp_tasks/serve'),
    ts = require('./gulp_tasks/ts'),
    clean = require('./gulp_tasks/clean'),
    html = require('./gulp_tasks/html'),
    scss = require('./gulp_tasks/scss'),
    build = require('./gulp_tasks/build'),
    test = require('./gulp_tasks/test');

gulp.task('clean:serve', clean);

gulp.task('serve', ['ts:serve', 'html:serve', 'scss:serve'], serve);

gulp.task('ts:serve', ['clean:serve'], ts);
gulp.task('ts-watch:serve', ts);

gulp.task('html:serve', ['clean:serve'], html);
gulp.task('html-watch:serve', html);

gulp.task('scss:serve', ['clean:serve'], scss);
gulp.task('scss-watch:serve', scss);

gulp.task('build', html);

gulp.task('test-inject', test.inject);
gulp.task('test-run', ['test-inject'], test.run);
gulp.task('test', ['test-run']);
