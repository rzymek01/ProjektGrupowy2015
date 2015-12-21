export default function MessagesRoutesConfig($stateProvider:angular.ui.IStateProvider) {
    $stateProvider
        .state('app.messages', {
            url: 'messages/{roomId:[-_0-9a-zA-Z]{1,20}}',
            views: {
                'content@': {
                    templateUrl: 'modules/messages/messages.html',
                    controller: 'MessagesController as messagesController'
                }
            },
            params: {
                name: 'Guest'
            }
        });
}
