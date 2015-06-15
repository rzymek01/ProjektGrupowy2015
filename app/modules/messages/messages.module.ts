///<reference path="../../../typings/tsd.d.ts" />
'use strict';

import MessagesConfig from './messages.routes';
import MessagesController from './messages.controller';

angular.module('PGR2015.messages', [])
    .config(MessagesConfig)
    .controller('MessagesController', MessagesController);


