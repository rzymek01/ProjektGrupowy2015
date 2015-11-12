import LoginRoutesConfig from './login.routes';
import LoginController from './login.controller';

angular.module('PGR2015.login', [])
    .config(LoginRoutesConfig)
    .controller('LoginController', LoginController);


