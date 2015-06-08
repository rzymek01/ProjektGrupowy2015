///<reference path="../typings/tsd.d.ts" />
'use strict';

export function appConfigPhase($locationProvider: angular.ILocationProvider, $compileProvider: angular.ICompileProvider,
                $httpProvider: angular.IHttpProvider, DEBUG: boolean) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $httpProvider.useApplyAsync(true);
    $compileProvider.debugInfoEnabled(DEBUG);
}

export function appRunPhase($rootScope: angular.IRootScopeService, $state: angular.ui.IStateService, DEBUG: boolean) {
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        if (fromState.abstract) {
            $state.go('index');
        }

        if (DEBUG) {
            console.error(error);
        }
    });
}
