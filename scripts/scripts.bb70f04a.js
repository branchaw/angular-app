"use strict";angular.module("workspaceApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("workspaceApp").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=b.find(),a.storage=c,a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("workspaceApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=d356865266a3596cfb89f23e42e7f9d3",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("workspaceApp").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=d356865266a3596cfb89f23e42e7f9d3",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("workspaceApp").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.cityID=b.cityID,a.currentWeather=c.query({cityID:b.cityID}),a.saveCity=function(a){var b={name:a.name,id:a.id};if(d.savedCities){for(var c=!0,e=0;e<d.savedCities.length;e++)d.savedCities[e].id==b.id&&(c=!1);1==c?d.savedCities.push(b):console.log("city already saved")}else d.savedCities=[b]}}]),angular.module("workspaceApp").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=d356865266a3596cfb89f23e42e7f9d3",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("workspaceApp").controller("ForecastCtrl",["$scope","$routeParams","forecast",function(a,b,c){a.cityID=b.cityID,a.forecastData=c.query({cityID:b.cityID})}]),angular.module("workspaceApp").run(["$templateCache",function(a){a.put("views/about.html",'<h1>Count with the Count!</h1> <p class="lead"> <img src="images/Count_von_Count_kneeling.9566f8f8.png" alt="Count Ah Ah Ah!"><br> Ah Ah Ah! </p> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div>'),a.put("views/contact.html",'<h1>Contact Us!</h1> <p class="lead"> <img src="images/Ewphone-interview.f2836f28.jpg" alt="Elmo finds his calling"><br> Allo? You rang? </p>'),a.put("views/current.html",'<h1>Current Weather for {{currentWeather.name}}</h1> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <p><a ng-href="/#/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 16-day Forecast</a></p> <p><button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save City</button></p>'),a.put("views/forecast.html",'<h1>16-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat="prediction in forecastData.list" class="weather-forecast"> <dt>Forecast for {{weather.dt*1000 | date:\'MMM dd, yyyy\'}}</dt> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </dl> <p><a ng-href="/#/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p>'),a.put("views/main.html",'<!-- <div class="jumbotron">\n  <h1>\'Waka, Waka!\'</h1>\n  <p class="lead">\n    <img src="images/Fozzie120x135.a8737206.jpg" alt="Fozzie Bear!"><br>\n    Always a pleasure scaffolding your jokes!\n  </p>\n  <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>\n</div> \n<div ng-app class="jumbotron" ng-controller="MainCtrl">\n  <h1>Weather for {{current.name}}</h1>\n  <p class="lead">\n    <div ng-init="location=\'Seattle\'">\n        <p>\n          <label for="location">Location:\n            <input type="text" name="location" ng-model="location">\n          </label>\n        </p>\n        <p>\n          <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()">Get Current Weather</button>\n        </p>\n      <dl>\n        <dt>Currently</dt>\n        <dd>{{current.weather[0].main}}</dd>\n        <dd>{{current.weather[0].description}}</dd>\n        <dt>Temperature</dt>\n        <dd>{{current.main.temp}}</dd>\n        <dt>Wind</dt>\n        <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd>\n        <dt>Clouds</dt>\n        <dd>{{current.clouds.all}}%</dd>\n      </dl>\n    </div>\n  </p>\n</div> --> <div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Select Your City</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find City</button> </p> </div> <div ng-if="searchQuery"> <p class="lead">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat="city in citiesFound.list"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href="/#/current/{{city.id}}" class="btn btn-lg btn-primary">View Weather</a></dd> </dl> </div> </p> </div> <div ng-if="storage.savedCities"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="/#/current/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> </li> </ul> </div>')}]);