export default class LoginController {
    private $state: angular.ui.IStateService;

    constructor($state: angular.ui.IStateService) {
        this.$state = $state;
    }

    login() {
        this.$state.go('app.messages');
    }
}
