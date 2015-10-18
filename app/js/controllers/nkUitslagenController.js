/**
 * Controller for uitslagen
 */
angular.module('altisNKMasters').controller('nkUitslagenCTRL', ['$scope', 'nkLoadUitslagenService',

    function ($scope, nkLoadUitslagenService) {

        $scope.uitslagenKogelslingeren = nkLoadUitslagenService.loadUitslagenKogelslingeren();
        $scope.uitslagenGewichtwerpen = nkLoadUitslagenService.loadUitslagenGewichtwerpen();
        $scope.uitslagenWerpvijfkamp = nkLoadUitslagenService.loadUitslagenWerpvijfkamp();

        $scope.onderdelen = ["NK Kogelslingeren","NK Gewichtwerpen","NK Werpvijfkamp","5K Kogelslingeren", "5K Kogel", "5K Discus", "5K Speer", "5K Gewichtwerpen"];
        $scope.nkSelectOnderdeel = {onderdeel:"NK Kogelslingeren"};
        $scope.categorien = ["V35","V40","V45","V50","V55","V60","V65","V70","M35","M40","M45","M50","M55","M60","M65","M70","M80"];
        $scope.nkSelectCategorie = {categorie:'V35'};
    }]);
