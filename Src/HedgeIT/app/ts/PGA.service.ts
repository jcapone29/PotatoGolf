module PotatoGolf.Data {

    export class PGAService {

        currentUser = new Potato();
        leagueMembers = new Array<Potato>();
        sideMenu = true;
        localUrl = "http://localhost:51201/api/Potato/";

        public static $inject: string[] = ["$http", "$q", "PGAEntites"];

        constructor(private $http: angular.IHttpService, private $q: angular.IQService, public enities: PGAEntites) { }


        GetUser() {
            var user = this.currentUser;

            return this.$http.get(this.localUrl + 'getUser', {params: user }).then(r => r.data);

        }

        CreateUser() {

            return this.$http.post(this.localUrl + 'createUser', this.currentUser).then( response => {
                return response;
            });

        }

        GetLeague() {

            return this.$http.get(this.localUrl + 'getLeague', this.currentUser).then(r => r.data);

        }
    }

    app.service("PGAService", PGAService);

}