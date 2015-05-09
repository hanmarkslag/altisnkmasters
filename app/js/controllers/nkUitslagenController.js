/**
 * Controller for uitslagen
 */
angular.module('altisNKMasters').controller('nkUitslagenCTRL', ['$scope', 'nkUitslagenService',

    function ($scope, nkUitslagenService) {

        $scope.uitslagen = getUitslagen("./data/uitslagen/", "uitslag-za-01");

        nkUitslagenService.getUitslagen("./data/uitslagen/", "uitslag-za-02").then(
            function(response) {
                tmpPrestaties = response.data.prestaties;
                for (var i = 0; i < tmpPrestaties.length; i++) {
                    $scope.uitslagen.push(tmpPrestaties[i]);
                }
            }
        );

        function getUitslagen(tmpdirectory, tmpfilename) {
            var result = null;
            nkUitslagenService.getUitslagen(tmpdirectory, tmpfilename).then(
                function(response) {

                    //result is een locale !!!

                    result = response.data.prestaties;
                }
            );
            return result;
        }

    }]);
