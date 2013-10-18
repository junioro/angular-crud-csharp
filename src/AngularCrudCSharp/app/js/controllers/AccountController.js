define([], function () {
    "use strict";
    
    var controller = ['$scope', 'AccountService', function ($scope, AccountService) {
        $scope.accounts = AccountService.query();
    }];

    return controller;
});