//modules required for application bootstrap
import appRoutesConfig from './app.routes';
import { appConfigPhase, appRunPhase } from './app.config';
import constants from './constants';

//bootstrap the modules
angular.module('PGR2015', [
        'PGR2015.core',
        'PGR2015.login',
        'PGR2015.messages',
        'PGR2015.printing',
        'PGR2015.copyButton'
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

//application modules
import './modules/login/login.module';
import './modules/messages/messages.module';
import './modules/printing/printing.module';
import './modules/copyButton/copyButton.module';
