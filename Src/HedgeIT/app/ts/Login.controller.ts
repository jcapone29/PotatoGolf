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

            this.pgaService.GetUser().then((response: Potato) => {

                this.pgaService.currentUser = response;
                localStorage.setItem("Potato", JSON.stringify(this.pgaService.currentUser));

                this.pgaService.UserLoginCheck();

            });
        }

        Logout() {

           this.currentView = 'Login.html';
        
            localStorage.removeItem("Potato");
        }
       
    }

    app.controller("LoginCtrl", LoginCtrl);


}
