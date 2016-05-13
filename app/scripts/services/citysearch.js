'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.citysearch
 * @description
 * # citysearch
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=d356865266a3596cfb89f23e42e7f9d3', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });