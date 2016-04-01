module PotatoGolf.Data {

    export class PGAService {

        currentUser = new Potato();
        leagueMembers = new Array<Potato>();
        sideMenu = true;
        currentView: string;
        localUrl = "http://localhost:51201/api/Potato/";
        apiUrl = "http://ec2-52-91-68-23.compute-1.amazonaws.com/CapApi/api/Potato/";
        states: string[];
        stateSelect: string;
        courseList = new Array<Course>();
        courseNames: string[];
        selectedCourseList: Array<Course>
        selectedCourse = new Course();
        userScore = new Scores();

        public static $inject: string[] = ["$http", "$q", "PGAEntites"];

        constructor(private $http: angular.IHttpService, private $q: angular.IQService, public enities: PGAEntites) {

            this.UserLoginCheck();
        }


        GetUser() {


            return this.$http.get<Potato>(this.apiUrl + 'getUser', { params: this.currentUser }).then(r => r.data);

        }

        CreateUser() {

            return this.$http.post(this.apiUrl + 'createUser', this.currentUser).then( response => {
                return response;
            });

        }

        GetLeague() {

            return this.$http.get(this.apiUrl + 'getLeague', this.currentUser).then(r => r.data);

        }

        GetStates() {

            return this.$http.get(this.localUrl + 'getStates').then(r => r.data);

        }
        
        GetCourseList() {

            var param = new CourseParams();

            param.gender = this.currentUser.Gender; 
            param.state = this.stateSelect;           

  

            return this.$http.get(this.localUrl + 'getCourseList', { params: param }).then(r => r.data);

        }

        AddScore() {

            this.userScore.Course = this.selectedCourse;
            this.userScore.UserId = this.currentUser;
            this.userScore.RoundDate = new Date();


            return this.$http.post(this.localUrl + 'postScore', this.userScore).then(response => {
                console.log(response);
                return response;
            });
        }

        UserLoginCheck() {

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

            
        }

    }

    app.service("PGAService", PGAService);

}