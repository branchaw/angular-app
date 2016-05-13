'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.forecast
 * @description
 * # forecast
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=d356865266a3596cfb89f23e42e7f9d3', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });