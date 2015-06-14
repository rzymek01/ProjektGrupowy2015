///<reference path="../../../typings/tsd.d.ts" />
'use strict';

class LoginController {
    private $state: angular.ui.IStateService;
    private $scope; //@todo: add type, angular.IScope ?

    constructor($state, $scope) {
        'ngInject';
        this.$state = $state;
        this.$scope = $scope;
    }

    login() {
        console.debug('in login');
        this.$scope.nick2 = this.$scope.nick || '-';
    }
}

export default LoginController;
