/**
 * Controller for custom navigation features
 */
angular.module('altisNKMasters').controller('nkNavigationCTRL', ['$scope', function($scope) {

    $scope.nkNavIsCollapsed = true;

    $scope.toggleNkMenu = function () {
        var mq = window.matchMedia( "(max-width: 768px)" );
        if (mq.matches) {
            $scope.nkNavIsCollapsed = !$scope.nkNavIsCollapsed;        }
    }

}]);