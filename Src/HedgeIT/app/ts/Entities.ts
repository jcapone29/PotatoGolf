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
    }


    app.constant("PGAEntites", PGAEntites);
}