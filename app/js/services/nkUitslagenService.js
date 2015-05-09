/**
 * Uitslagen Service
 */
angular.module('altisNKMasters').factory('nkUitslagenService', ['$http',

    function ($http) {
        return {
            getUitslagen: function(nkDirectory, nkFilename) {
                var uitslagUrl = nkDirectory + nkFilename + ".json";
                return $http.get(uitslagUrl);
            }
        }
    }]);
