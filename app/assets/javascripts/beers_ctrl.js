(function() {
	"use strict";

	angular.module("app").controller("beersCtrl", function($scope,$http){

		$scope.setup = function(){
			$http.get("/api/v1/beers.json").then(function(response){

			$scope.beers = response.data;
			});

		};

		$scope.toggleStyleVisible = function(beer){
			beer.styleVisible = !beer.styleVisible
		};

		$scope.addBeer = function(beerName, beerStyle, beerHop, beerMalts, beerAlcohol){
			
				var newBeer = {
					name: beerName,
					style: beerStyle,
					hop: beerHop,
					malts: beerMalts,
					alcohol: beerAlcohol
				};

				$http.post('/api/v1/beers.json', newBeer).then(function(response){
				$scope.beers.push(response.data);
				$scope.newName = '';
				$scope.newStyle = '';
				$scope.newHop = '';
				$scope.newMalts = '';
				$scope.newAlcohol = '';
				$scope.errors = [];
				}, function(error){
					$scope.errors = error.data.errors;
				});
			};

			$scope.deleteBeer = function(index){
				$scope.beers.splice(index,1);
			};

			$scope.setOrderBy = function(attribute){

				if (attribute != $scope.orderAttribute){
					$scope.descending = false;
				} else {
					$scope.descending = !$scope.descending;
				}

				$scope.orderAttribute = attribute
			};
		});
}());