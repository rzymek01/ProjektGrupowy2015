///<reference path="../typings/tsd.d.ts" />
'use strict';

//modules required for application bootstrap
import appRoutesConfig from './app.routes';
import { appConfigPhase, appRunPhase } from './app.config';
import constants from './constants';

//application modules
import './modules/login/login.module';

//bootstrap the modules
angular.module('PGR2015', [
        'PGR2015.core',
        'PGR2015.login'
    ])
    .config(appConfigPhase)
    .config(appRoutesConfig)
    .run(appRunPhase);

angular.module('PGR2015.core', [
        'PGR2015.constants',
        'ui.router'
    ]);

//add constants
const constantsModule = angular.module('PGR2015.constants', []);
constants.forEach((value, name) => constantsModule.constant(name, value));

//bootstrap the whole app
angular.bootstrap(document, ['PGR2015']);
