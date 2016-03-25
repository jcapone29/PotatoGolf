module PotatoGolf.Data {

    export class PGAService {

        currentUser = new Potato();
        leagueMembers = new Array<Potato>();
        sideMenu = true;
        currentView: string;
        localUrl = "http://localhost:51201/api/Potato/";
        states: string[];
        stateSelect: string;
        courseList = new Array<Course>();

        public static $inject: string[] = ["$http", "$q", "PGAEntites"];

        constructor(private $http: angular.IHttpService, private $q: angular.IQService, public enities: PGAEntites) {

            this.UserLoginCheck();
        }


        GetUser() {


            return this.$http.get(this.localUrl + 'getUser', { params: this.currentUser }).then(r => r.data);

        }

        CreateUser() {

            return this.$http.post(this.localUrl + 'createUser', this.currentUser).then( response => {
                return response;
            });

        }

        GetLeague() {

            return this.$http.get(this.localUrl + 'getLeague', this.currentUser).then(r => r.data);

        }

        GetStates() {

            return this.$http.get(this.localUrl + 'getStates').then(r => r.data);

        }
        
        GetCourseList() {

            console.log(this.currentUser);

            var param = new CourseParams();

            param.gender = this.currentUser.Gender; 
            param.state = this.stateSelect;
            
            

            return this.$http.get(this.localUrl + 'getCourseList', { params: param }).then(r => r.data);

        }

        UserLoginCheck() {


            this.currentUser = JSON.parse(localStorage.getItem("Potato"));

          

            if (this.currentUser != null) {

                this.currentView = "News.html";
            }

            else {

                this.currentView = "Login.html";
            }

            
        }
    }

    app.service("PGAService", PGAService);

}