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
        var Scores = (function () {
            function Scores() {
            }
            return Scores;
        })();
        Data.Scores = Scores;
        var Course = (function () {
            function Course() {
            }
            return Course;
        })();
        Data.Course = Course;
        var CourseParams = (function () {
            function CourseParams() {
            }
            return CourseParams;
        })();
        Data.CourseParams = CourseParams;
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
                var _this = this;
                this.pgaService.GetUser().then(function (response) {
                    localStorage.setItem("Potato", JSON.stringify(_this.pgaService.currentUser));
                    _this.pgaService.UserLoginCheck();
                });
            };
            LoginCtrl.prototype.Logout = function () {
                this.currentView = 'Login.html';
                localStorage.removeItem("Potato");
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
                this.courseList = new Array();
                this.UserLoginCheck();
            }
            PGAService.prototype.GetUser = function () {
                return this.$http.get(this.localUrl + 'getUser', { params: this.currentUser }).then(function (r) { return r.data; });
            };
            PGAService.prototype.CreateUser = function () {
                return this.$http.post(this.localUrl + 'createUser', this.currentUser).then(function (response) {
                    return response;
                });
            };
            PGAService.prototype.GetLeague = function () {
                return this.$http.get(this.localUrl + 'getLeague', this.currentUser).then(function (r) { return r.data; });
            };
            PGAService.prototype.GetStates = function () {
                return this.$http.get(this.localUrl + 'getStates').then(function (r) { return r.data; });
            };
            PGAService.prototype.GetCourseList = function () {
                console.log(this.currentUser);
                var param = new Data.CourseParams();
                param.gender = this.currentUser.Gender;
                param.state = this.stateSelect;
                return this.$http.get(this.localUrl + 'getCourseList', { params: param }).then(function (r) { return r.data; });
            };
            PGAService.prototype.UserLoginCheck = function () {
                this.currentUser = JSON.parse(localStorage.getItem("Potato"));
                if (this.currentUser != null) {
                    this.currentView = "News.html";
                }
                else {
                    this.currentView = "Login.html";
                }
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
        var ScoresCtrl = (function () {
            function ScoresCtrl($scope, pgaService, enities) {
                this.$scope = $scope;
                this.pgaService = pgaService;
                this.enities = enities;
                this.GetStates();
            }
            ScoresCtrl.prototype.GetStates = function () {
                var _this = this;
                this.pgaService.GetStates().then(function (response) {
                    _this.pgaService.states = response;
                });
            };
            ScoresCtrl.prototype.GetCourseList = function () {
                var _this = this;
                this.pgaService.GetCourseList().then(function (response) {
                    _this.pgaService.courseList = response;
                });
            };
            ScoresCtrl.$inject = ["$scope", "PGAService", "PGAEntites"];
            return ScoresCtrl;
        })();
        Data.ScoresCtrl = ScoresCtrl;
        Data.app.controller("ScoresCtrl", ScoresCtrl);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
//# sourceMappingURL=app.js.map