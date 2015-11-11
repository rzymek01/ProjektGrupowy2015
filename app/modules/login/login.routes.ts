export default function LoginRoutesConfig($stateProvider:angular.ui.IStateProvider) {
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
