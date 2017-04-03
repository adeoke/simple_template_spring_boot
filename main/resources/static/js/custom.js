var app = angular.module('myApp', []);

app.controller('myController', function request($scope, $http, $log){
    $scope.result = function() { $http({
        method: 'GET',
        url: '/'})

        .then(function (response){
            $scope.responseData = response.data;
            $log.info(response);
        }, function(reason){
            $scope.error = reason.data;
            $log.info(reason);
        });
    }

    $scope.secondResult = function() { $http({
        method: 'GET',
        url: '/js/custom.js'})

        .then(function (response){
          $scope.secondData = response.data;
          $log.info(response);
        }, function(reason){
          $scope.secondError = reason.data;
          $log.info(reason);
        });
    }
});

//var app = angular.module("myApp", []);
//app.controller("myController", function($scope) {
//  $scope.myTxt = "You have not yet clicked submit";
//  $scope.result = function () {
//      $scope.myTxt = "You clicked submit!";
//  }
//});