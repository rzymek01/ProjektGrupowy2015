///<reference path="../../../typings/tsd.d.ts" />
'use strict';

function CopyButtonDirective($window) {
    const CopyButton = $window.CopyButton;
    return {
        restrict: 'A',
        scope: {
            textToCopy: '='
        },
        link(scope: angular.IScope, element) {
            const copyButton = new CopyButton(element[0]);
            scope.$watch('textToCopy', (newVal, oldVal) => {
                copyButton.setCopyData(newVal);
            });
        }
    }
}

export default CopyButtonDirective;
