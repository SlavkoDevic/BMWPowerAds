var app = angular.module("oglasi",['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    controller: 'PocetnaController',
    templateUrl: 'views/pocetna.html'
  })
  .when('/oglasi/:id', {
    controller: 'OglasController',
    templateUrl: 'views/oglas.html'
  })
  .when('/registracija',{
    controller: 'RegistracijaController',
    templateUrl: 'views/registracija.html'
  })
  .when('/login', {
    controller:'loginController',
    templateUrl:'views/login.html'
  })

})
