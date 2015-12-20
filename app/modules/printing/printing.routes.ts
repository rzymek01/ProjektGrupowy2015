export default function PrintingRoutesConfig($stateProvider:angular.ui.IStateProvider) {
    $stateProvider
        .state('app.printing', {
            url: 'printing/',
            views: {
                'content@': {
                    templateUrl: 'modules/printing/printing.html',
                    controller: 'PrintingController as printingController'
                }
            }
        });
}
