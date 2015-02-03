angular.module("altisNKMasters")
    .controller("altisNKMastersCTRL", ['$scope', 'nkConstants',
        function($scope, nkConstants) {

            $scope.nkHeaderPartial = nkConstants.nkHeader;

        }]);
