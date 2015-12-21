export default class MessagesController {
    private messages: AngularFireArray;
    private message: string;
    private name: string;
    private loading: boolean;

    constructor (private $firebaseArray: AngularFireArrayService, private $stateParams: angular.ui.IStateParamsService) {
        const ref = new Firebase(`https://pgr2015.firebaseio.com/messages/${$stateParams['roomId']}`);
        this.name = $stateParams['name'];
        this.loading = true;
        this.messages = $firebaseArray(ref);
        this.messages.$loaded(() => {
            this.loading = false;
        });
    }

    inputKeydown($event: KeyboardEvent) {
        if($event.which === 13) {
            $event.preventDefault();
            $event.stopPropagation();
            
            this.messages.$add({
                text: this.message,
                author: this.name
            });

            this.message = '';
        }
    }

}
