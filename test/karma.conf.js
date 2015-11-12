// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-03-21 using
// generator-karma 0.9.0

module.exports = function(config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            //bower:js
            'app/components/angular/angular.js',
            'app/components/angular-ui-router/release/angular-ui-router.js',
            'app/components/core.js/client/core.js',
            'app/components/zeroclipboard/dist/ZeroClipboard.js',
            'app/components/CopyButton/dist/copyButton.js',
            'app/components/angular-mocks/angular-mocks.js',
            //endbower
            'test/tests.bundle.js'
        ],

        // list of files / patterns to exclude
        exclude: [
        ],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-webpack'
        ],

        preprocessors: {
            'test/tests.bundle.js': ['webpack']
        },

        //TODO: add single webpack config
        webpack: {
            module: {
                loaders: [
                    {test: /\.ts$/, loader: 'babel!ts'}
                ]
            },
            resolve: {
                extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
            },
            output: {
                filename: 'tests.js'
            },
            devtool: 'inline-source-map'
        },

        webpackMiddleware: {
            noInfo: true
        },

        typings: [
            'typings/tsd.d.ts'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
