///<reference path="../../../typings/tsd.d.ts" />
'use strict';

class LoginController {
    private $state: angular.ui.IStateService;

    constructor($state) {
        'ngInject';
        this.$state = $state;
    }

    login() {
        //nothing
    }
}

export default LoginController;
