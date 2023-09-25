(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageStyle = {};

        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(',');

            // Remove empty items and trim whitespace
            items = items.filter(function (item) {
                return item.trim() !== "";
            });

            if (items.length === 0) {
                $scope.message = "Please enter data first";
                $scope.messageStyle = { 'color': 'red', 'border': '2px solid red' };
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageStyle = { 'color': 'green', 'border': '2px solid green' };
            } else {
                $scope.message = "Too much!";
                $scope.messageStyle = { 'color': 'green', 'border': '2px solid green' };
            }
        };
    }
})();
