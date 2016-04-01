module PotatoGolf.Data {

    export class PGAEntites {


        public static $inject: string[] = ["$scope", "PGAService"];

        constructor(public $scope: any) { }
    }





    export class Potato
    {
        Id: number;
        UserName: string;
        Password: string;
        Email: string;
        FirstName: string;
        LastName: string;
        Handicap: number;
        Bio: string;
        ProfilePicture: string;
        Active: boolean;
        Gender: string;
    }


    export class Scores {


        UserId: Potato;
        Score: number;
        Course: Course;
        RoundDate: Date ;
    }

    export class Course {

        Id: number;
        Name: string;
        City: string;
        State: string;
        Tee: string;
        UsgaRating: string;
        Slope: string;
        Gender: string;
        Front: string;
        Back: string;
        BogeyRating: string;

    }

    export class CourseParams {
        state: string;
        gender: string;
    }

    app.constant("PGAEntites", PGAEntites);
}