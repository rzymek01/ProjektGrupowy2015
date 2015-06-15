///<reference path="../../../typings/tsd.d.ts" />
'use strict';

class LoginController {
    private $state: angular.ui.IStateService;

    constructor($state) {
        'ngInject';
        this.$state = $state;
    }

    login() {
        this.$state.go('app.messages');
    }
}

export default LoginController;
