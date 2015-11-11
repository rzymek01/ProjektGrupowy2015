function appRoutesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    //https://github.com/angular-ui/ui-router/issues/600
    $urlRouterProvider.otherwise(($injector: angular.auto.IInjectorService) => {
        var $state: angular.ui.IStateService = $injector.get('$state');
        $state.go('app.login');
    });

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/',
            views: {
                content: {}
            }
        });
}

export default appRoutesConfig;
