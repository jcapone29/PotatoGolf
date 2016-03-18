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
        var Potatos = (function () {
            function Potatos() {
            }
            return Potatos;
        })();
        Data.Potatos = Potatos;
        Data.app.constant("PGAEntites", PGAEntites);
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
                console.log(this.bio);
            };
            PGACtrl.$inject = ["$scope", "PGAService", "PGAEntites"];
            return PGACtrl;
        })();
        Data.PGACtrl = PGACtrl;
        Data.app.controller("PGACtrl", PGACtrl);
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
                this.currentUser = new Data.Potatos();
                this.leagueMembers = new Array();
            }
            PGAService.$inject = ["$http", "$q", "PGAEntites"];
            return PGAService;
        })();
        Data.PGAService = PGAService;
        Data.app.service("PGAService", PGAService);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
//# sourceMappingURL=app.js.map