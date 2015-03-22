/**
 * Controller for deelnemer features
 */
angular.module('altisNKMasters').controller('nkDeelnemersCTRL', ['$scope', 'nkDeelnemersService',

    function ($scope, nkDeelnemersService) {

        $scope.showDetails = false;

        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        }

        nkDeelnemersService.getDeelnemers().then(
            function(response) {
                $scope.deelnemers = response.data;
            }
        );
    }]);
