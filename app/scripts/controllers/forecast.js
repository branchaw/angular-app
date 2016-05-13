'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
   .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });
