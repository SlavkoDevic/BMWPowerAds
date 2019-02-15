app.controller('PocetnaController',['$scope','oglasi', function($scope,oglasi) {

  oglasi.then(function(data) {
    $scope.oglasi = data;
  })

  $scope.pretraga = "";


 // // $scope.oglasi = [
 //   {
 //     naslov: "2008 BMW M3 *AKRAPOVIC* *NAVIGACIJA* *XENON* *KOZA*",
 //     cena: 28999,
 //     valuta: 'eu',
 //     proizveden:	2008,
 //     presao:	80000,
 //     gorivo:	"Benzin",
 //     kontakt: 641112223,
 //     slika: "../../Images/M3C.jpg",
 //     karoserija: "Limuzina",
 //     ocena: "4/5"
 //   },
 //   {
 //     naslov: "2014 BMW M4 Coupe M DKG Navi Prof. M Drivers Package PDC",
 //     cena: 49900,
 //     valuta: 'eu',
 //     proizveden:	2014,
 //     presao:	88135,
 //     gorivo:	"Benzin",
 //     kontakt: 641122334,
 //     slika: "../../Images/M4T.jpg",
 //     karoserija: "Kupe",
 //     ocena: "4/5"
 //   },
 //   {
 //     naslov: "2012 BMW M5 Individual NaviProfessional KeylessGo HeadUp",
 //     cena: 33999,
 //     valuta: 'eu',
 //     proizveden:	2012,
 //     presao:	218000,
 //     gorivo:	"Benzin",
 //     kontakt: 641231231,
 //     slika: "../../Images/M5T.jpg",
 //     karoserija: "Limuzina",
 //     ocena: "5/5"
 //   },
 //   {
 //     naslov: "2014 BMW M6 Gran Coupe, M-Driver Package, LED, Kamera",
 //     cena: 49900,
 //     valuta: 'eu',
 //     proizveden:	2014,
 //     presao:	72000,
 //     gorivo:	"Benzin",
 //     kontakt: 64121314,
 //     slika: "../../Images/M6.jpg",
 //     karoserija: "Kupe",
 //     ocena: "5/5"
 //   },
 //   {
 //     naslov: "2018 BMW M2 Competition DKG M Drivers Package, Navi,DAB",
 //     cena: 66450,
 //     valuta: 'eu',
 //     proizveden:	2018,
 //     presao:	19800,
 //     gorivo:	"Benzin",
 //     kontakt: 641234567,
 //     slika: "../../Images/M2.jpg",
 //     karoserija: "Limuzina",
 //     ocena: "4/5"
 //   },
 //   {
 //     naslov: "2013 BMW X5 M SPORT-PANORAMA-COMFORTSEATS",
 //     cena: 36900,
 //     valuta: 'eu',
 //     proizveden:	2013,
 //     presao:	75000,
 //     gorivo:	"Benzin",
 //     kontakt: 641233210,
 //     slika: "../../Images/M5X.jpg",
 //     karoserija: "SUV",
 //     ocena: "4/5"
 //   },
 //   {
 //     naslov: "2016 BMW X4 M40i M Sportpaket Alpina HuD HiFi EDC",
 //     cena: 45900,
 //     valuta: 'eu',
 //     proizveden:	2016,
 //     presao:	23800,
 //     gorivo:	"Benzin",
 //     kontakt: 641233211,
 //     slika: "../../Images/M4X.jpg",
 //     karoserija: "SUV",
 //     ocena: "5/5"
 //   },
 //   {
 //     naslov: "2018 BMW M850i xDrive Coupe Carbon",
 //     cena: 123900,
 //     valuta: 'eu',
 //     proizveden:	2018,
 //     presao:	100,
 //     gorivo:	"Benzin",
 //     kontakt: 641233212,
 //     slika: "../../Images/M8.jpg",
 //     karoserija: "Kupe",
 //     ocena: "5/5"
 //   }];


}])
