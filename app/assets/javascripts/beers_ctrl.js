(function) {
	"use strict";

	angular.module("app").controller("beersCtrl", function($scope,$http){

		$scope.setup = function(){
			$http.get("/api/v1/beers.json").then(function(response){

				$scope.beers = response.data;
			});
		};

		$scope.addBeer = function(beerName, beerStyle, beerHop, beerYeast, beerMalts, beerIbu, beerAlcohol, beerBlg){
			
			if ( beerName && beerStyle && beerHop && beerYeast && beerMalts && beerIbu && beerAlcohol && beerBlg ){
				var newBeer = {
					name: beerName,
					style: beerStyle,
					hop: beerHop,
					yeast: beerYeast,
					malts: beerMalts,
					ibu: beerIbu,
					alcohol: beerAlcohol,
					blg: beerBlg,
				};

				$scope.beers.push(newBeer);
				$scope.newName = '';
				$scope.newStyle = '';
				$scope.newHop = '';
				$scope.newYeast = '';
				$scope.newMalts = '';
				$scope.newIbu = '';
				$scope.newAlcohol = '';
				$scope.newBlg = '';
				}
			};

			$scope.deleteBeer = function(index){
				$scope.beers.splice(index,1);
			};
	});
};