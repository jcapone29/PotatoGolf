var PotatoGolf;
(function (PotatoGolf) {
    var Data;
    (function (Data) {
        Data.app = angular.module("pga.potato", []);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
var PotatoGolf;
(function (PotatoGolf) {
    var Data;
    (function (Data) {
        var PGAEntites = (function () {
            function PGAEntites($scope) {
                this.$scope = $scope;
            }
            PGAEntites.$inject = ["$scope", "PGAService"];
            return PGAEntites;
        })();
        Data.PGAEntites = PGAEntites;
        var Potato = (function () {
            function Potato() {
            }
            return Potato;
        })();
        Data.Potato = Potato;
        Data.app.constant("PGAEntites", PGAEntites);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
var PotatoGolf;
(function (PotatoGolf) {
    var Data;
    (function (Data) {
        var LoginCtrl = (function () {
            function LoginCtrl($scope, pgaService, enities) {
                this.$scope = $scope;
                this.pgaService = pgaService;
                this.enities = enities;
                this.bio = 'test';
            }
            LoginCtrl.prototype.CreateUser = function () {
                //this.pgaService.CreateUser().then(results => {
                //});
                this.currentView = 'News.html';
                console.log(this.currentView);
            };
            LoginCtrl.prototype.LoginUser = function () {
                console.log(this.pgaService.currentUser);
                this.pgaService.GetUser().then(function (response) {
                    console.log(response);
                });
            };
            LoginCtrl.$inject = ["$scope", "PGAService", "PGAEntites"];
            return LoginCtrl;
        })();
        Data.LoginCtrl = LoginCtrl;
        Data.app.controller("LoginCtrl", LoginCtrl);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
var PotatoGolf;
(function (PotatoGolf) {
    var Data;
    (function (Data) {
        var PGAService = (function () {
            function PGAService($http, $q, enities) {
                this.$http = $http;
                this.$q = $q;
                this.enities = enities;
                this.currentUser = new Data.Potato();
                this.leagueMembers = new Array();
                this.sideMenu = true;
                this.localUrl = "http://localhost:51201/api/Potato/";
            }
            PGAService.prototype.GetUser = function () {
                var user = this.currentUser;
                return this.$http.get(this.localUrl + 'getUser', { params: user }).then(function (r) { return r.data; });
            };
            PGAService.prototype.CreateUser = function () {
                return this.$http.post(this.localUrl + 'createUser', this.currentUser).then(function (response) {
                    return response;
                });
            };
            PGAService.prototype.GetLeague = function () {
                return this.$http.get(this.localUrl + 'getLeague', this.currentUser).then(function (r) { return r.data; });
            };
            PGAService.$inject = ["$http", "$q", "PGAEntites"];
            return PGAService;
        })();
        Data.PGAService = PGAService;
        Data.app.service("PGAService", PGAService);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
var PotatoGolf;
(function (PotatoGolf) {
    var Data;
    (function (Data) {
        var PGACtrl = (function () {
            function PGACtrl($scope, pgaService, enities) {
                this.$scope = $scope;
                this.pgaService = pgaService;
                this.enities = enities;
                this.bio = 'test';
            }
            PGACtrl.prototype.Test = function () {
                this.pgaService.sideMenu = false;
                console.log(this.pgaService.sideMenu);
            };
            PGACtrl.$inject = ["$scope", "PGAService", "PGAEntites"];
            return PGACtrl;
        })();
        Data.PGACtrl = PGACtrl;
        Data.app.controller("PGACtrl", PGACtrl);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
//# sourceMappingURL=app.js.map