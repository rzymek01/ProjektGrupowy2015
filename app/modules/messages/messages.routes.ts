///<reference path="../../../typings/tsd.d.ts" />
'use strict';

function MessagesConfig($stateProvider: angular.ui.IStateProvider) {
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

export default MessagesConfig;
