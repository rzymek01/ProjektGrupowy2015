const gulp = require('gulp'),
    Server = require('karma').Server,
    wiredep = require('wiredep').stream;

module.exports = {
    inject: function() {
        return gulp.src('test/karma.conf.js')
            .pipe(wiredep({
                devDependencies: true,
                ignorePath:  /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            }))
            .pipe(gulp.dest('test'));
    },
    run: function(done) {
        new Server({
            configFile: process.cwd() + '/test/karma.conf.js',
            singleRun: true
        }, done).start();
    }
};
