app.factory('oglasi', ['$http', function($http) {
  return (
    $http.get("data/oglasi.json")
    .then(function(response) {
        return response.data;
    })
  )
}]);
