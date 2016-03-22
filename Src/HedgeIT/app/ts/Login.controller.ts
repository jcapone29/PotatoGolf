module PotatoGolf.Data {

    export class LoginCtrl {

        currentView: string;
        bio = 'test';


        public static $inject: string[] = ["$scope", "PGAService", "PGAEntites"];



        constructor(public $scope: any, public pgaService: PGAService, public enities: PGAEntites) {


        }

        CreateUser() {

            
            //this.pgaService.CreateUser().then(results => {
               
            //});

            this.currentView = 'News.html';
            console.log(this.currentView);
        }

        LoginUser() {

            console.log(this.pgaService.currentUser);
            this.pgaService.GetUser().then((response: any) => {
                console.log(response);
            });
        }

    }

    app.controller("LoginCtrl", LoginCtrl);



}