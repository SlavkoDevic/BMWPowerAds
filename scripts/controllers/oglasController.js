app.controller('OglasController',['$scope', 'oglasi', '$routeParams',
function($scope,oglasi, $routeParams) {


    oglasi.then(function(data) {
      $scope.oglas = data[$routeParams.id];
    })



}])
