export default function MessagesRoutesConfig($stateProvider:angular.ui.IStateProvider) {
    $stateProvider
        .state('app.messages', {
            url: 'messages/',
            views: {
                'content@': {
                    templateUrl: 'modules/messages/messages.html',
                    controller: 'MessagesController as messagesController'
                }
            }
        });
}
