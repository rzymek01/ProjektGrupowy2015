import IAugmentedJQuery = angular.IAugmentedJQuery;
import IScope = angular.IScope;

export default function CopyButtonDirective($window) {
    const CopyButton = $window.CopyButton;
    return {
        restrict: 'A',
        scope: {
            textToCopy: '='
        },
        link(scope: IScope, element: IAugmentedJQuery) {
            const copyButton = new CopyButton(element[0]);
            scope.$watch('textToCopy', newVal => {
                copyButton.setCopyData(newVal);
            });
        }
    };
}
