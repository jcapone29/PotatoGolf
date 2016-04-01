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
                    _this.pgaService.currentUser = response;
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
                this.apiUrl = "http://ec2-52-91-68-23.compute-1.amazonaws.com/CapApi/api/Potato/";
                this.courseList = new Array();
                this.selectedCourse = new Data.Course();
                this.userScore = new Data.Scores();
                this.UserLoginCheck();
            }
            PGAService.prototype.GetUser = function () {
                return this.$http.get(this.apiUrl + 'getUser', { params: this.currentUser }).then(function (r) { return r.data; });
            };
            PGAService.prototype.CreateUser = function () {
                return this.$http.post(this.apiUrl + 'createUser', this.currentUser).then(function (response) {
                    return response;
                });
            };
            PGAService.prototype.GetLeague = function () {
                return this.$http.get(this.apiUrl + 'getLeague', this.currentUser).then(function (r) { return r.data; });
            };
            PGAService.prototype.GetStates = function () {
                return this.$http.get(this.localUrl + 'getStates').then(function (r) { return r.data; });
            };
            PGAService.prototype.GetCourseList = function () {
                var param = new Data.CourseParams();
                param.gender = this.currentUser.Gender;
                param.state = this.stateSelect;
                return this.$http.get(this.localUrl + 'getCourseList', { params: param }).then(function (r) { return r.data; });
            };
            PGAService.prototype.AddScore = function () {
                this.userScore.Course = this.selectedCourse;
                this.userScore.UserId = this.currentUser;
                this.userScore.RoundDate = new Date();
                return this.$http.post(this.localUrl + 'postScore', this.userScore).then(function (response) {
                    console.log(response);
                    return response;
                });
            };
            PGAService.prototype.UserLoginCheck = function () {
                var user = JSON.parse(localStorage.getItem("Potato"));
                if (user == null) {
                    this.currentView = "Login.html";
                }
                else {
                    this.currentUser = user[0];
                    console.log(this.currentUser.FirstName);
                    if (this.currentUser != null) {
                        this.currentView = "News.html";
                    }
                    else {
                        this.currentView = "Login.html";
                    }
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
            function ScoresCtrl($scope, pgaService, enities, _) {
                this.$scope = $scope;
                this.pgaService = pgaService;
                this.enities = enities;
                this._ = _;
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
                    _this.pgaService.courseNames = _.uniq(_.map(_this.pgaService.courseList, function (e) { return e.Name; }));
                });
            };
            ScoresCtrl.prototype.GetTeeType = function (course) {
                this.pgaService.selectedCourseList = _.filter(this.pgaService.courseList, function (o) { return o.Name == course.replace(/^\s+|\s+$/g, ""); });
                console.log(this.pgaService.selectedCourseList);
            };
            ScoresCtrl.prototype.GetPlayedCourse = function () {
                var n = this.pgaService.selectedCourseList[0].Name;
                var g = this.pgaService.currentUser.Gender;
                var t = this.pgaService.selectedCourse.Tee.replace(/^\s+|\s+$/g, "");
                this.pgaService.selectedCourse = _.head(_.filter(this.pgaService.selectedCourseList, function (o) { return o.Name == n, o.Gender == g, o.Tee == t; }));
                console.log(this.pgaService.selectedCourse);
            };
            ScoresCtrl.$inject = ["$scope", "PGAService", "PGAEntites"];
            return ScoresCtrl;
        })();
        Data.ScoresCtrl = ScoresCtrl;
        Data.app.controller("ScoresCtrl", ScoresCtrl);
    })(Data = PotatoGolf.Data || (PotatoGolf.Data = {}));
})(PotatoGolf || (PotatoGolf = {}));
//# sourceMappingURL=app.js.map