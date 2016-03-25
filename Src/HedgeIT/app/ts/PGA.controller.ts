module PotatoGolf.Data {

    export class PGACtrl {

        
         bio= 'test';


         public static $inject: string[] = ["$scope", "PGAService", "PGAEntites"];



         constructor(public $scope: any, public pgaService: PGAService, public enities: PGAEntites) {

             
        }

         Test() {

            this.pgaService.sideMenu = false;
            console.log(this.pgaService.sideMenu);

        }

    }

    app.controller("PGACtrl", PGACtrl);


  
}