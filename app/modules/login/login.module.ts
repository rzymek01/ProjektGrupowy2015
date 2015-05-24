///<reference path="../../../typings/tsd.d.ts" />
'use strict';

import LoginConfig from './login.routes';
import LoginController from './login.controller';

angular.module('PGR2015.login', [])
    .config(LoginConfig)
    .controller('LoginController', LoginController);


