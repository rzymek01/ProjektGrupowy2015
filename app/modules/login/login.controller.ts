export default class LoginController {
    private roomId: string;
    private name: string;

    constructor(private $state: angular.ui.IStateService) {
    }

    login() {
        this.$state.go('app.messages', {
            roomId: this.roomId,
            name: this.name
        });
    }
}
