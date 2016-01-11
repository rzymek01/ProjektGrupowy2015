const gulp = require('gulp');

const browserSync = require('browser-sync');
browserSync.create('PGR2015');

const serve = require('./gulp_tasks/serve'),
    ts = require('./gulp_tasks/ts'),
    clean = require('./gulp_tasks/clean'),
    html = require('./gulp_tasks/html'),
    scss = require('./gulp_tasks/scss'),
    build = require('./gulp_tasks/build'),
    test = require('./gulp_tasks/test');

gulp.task('clean:tmp', clean('.tmp'));
gulp.task('clean:dist', clean('dist'));

gulp.task('serve', ['ts:serve', 'html:serve', 'scss:serve'], serve);

gulp.task('ts:serve', ['clean:tmp'], ts);
gulp.task('ts-watch:serve', ts);

gulp.task('html:serve', ['clean:tmp'], html);
gulp.task('html-watch:serve', html);

gulp.task('scss:serve', ['clean:tmp'], scss);
gulp.task('scss-watch:serve', scss);

gulp.task('build-webpack', ['clean:dist'], build.webpack);
gulp.task('build-inject', ['clean:dist', 'build-webpack'], build.inject);
gulp.task('build-scripts', ['clean:dist', 'build-inject'], build.scripts);
gulp.task('build-styles', ['clean:dist'], build.styles);
gulp.task('build', ['clean:dist', 'build-webpack', 'build-inject', 'build-scripts', 'build-styles']);

gulp.task('test-inject', test.inject);
gulp.task('test-run', ['test-inject'], test.run);
gulp.task('test', ['test-run']);
