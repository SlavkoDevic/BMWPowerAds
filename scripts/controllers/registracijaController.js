app.controller("RegistracijaController",["$scope",function($scope) {


    $scope.ime ="";
    $scope.email ="";
    $scope.pass1 ="";
    $scope.pass2 ="";


    $scope.potvrdi = function () {

      if ( ($scope.ime == "") || ($scope.email == "" ) ||
      ($scope.pass1 == "") || ($scope.pass2 == ""))
      {
        alert("Nisu uneti svi podaci");
      }else if ($scope.ime.length < 5) {
        alert("Korisnicko ime je prekratko");
      }else if ($scope.ime.length > 15) {
        alert("Korisnicko ime je predugo");
      }else if($scope.pass1.length < 8 || $scope.pass1.length > 15) {
        alert("Dozvoljena duzina lozinka 8-15 karaktera");
      }else if ($scope.pass1 != $scope.pass2) {
        alert("Lozinka se ne podudara");
      }else

      alert($scope.ime + "" + $scope.email + "" + $scope.pass1 + "" + $scope.pass2)


  }

}])
