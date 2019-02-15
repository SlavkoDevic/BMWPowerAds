app.controller("loginController",["$scope",function($scope) {



    $scope.email ="";
    $scope.pass1 ="";



    $scope.potvrdi = function () {

      if ( ($scope.email == "" ) || ($scope.pass1 == "") ) {

        alert("Nisu uneti svi podaci");
    }else if($scope.pass1.length < 8 || $scope.pass1.length > 15) {
        alert("Dozvoljena duzina lozinka 8-15 karaktera");

      }else

      alert($scope.email + "" + $scope.pass1)


  }

}])
