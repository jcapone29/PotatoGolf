module PotatoGolf.Data {

    export class PGAService {

        currentUser = new Potatos();
        leagueMembers = new Array<Potatos>();


        public static $inject: string[] = ["$http", "$q", "PGAEntites"];

        constructor(private $http: angular.IHttpService, private $q: angular.IQService, public enities: PGAEntites) { }



    }

    app.service("PGAService", PGAService);

}