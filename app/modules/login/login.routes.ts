///<reference path="../../../typings/tsd.d.ts" />
'use strict';

function LoginConfig($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state('app.login', {
            url: '',
            views: {
                'content@': {
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginController as loginController'
                }
            }
        });
}

export default LoginConfig;
