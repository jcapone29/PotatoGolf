module PotatoGolf.Data {

    export class PGACtrl {

        currentView: string;
         bio= 'test';


         public static $inject: string[] = ["$scope", "PGAService", "PGAEntites"];



        constructor(public $scope: any, public pgaService: PGAService, public enities: PGAEntites) {

          
        }

        Test() {

            console.log(this.bio);

        }

    }

    app.controller("PGACtrl", PGACtrl);


  
}