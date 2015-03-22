/**
 * Deelnemers Service
 */
angular.module('altisNKMasters').factory('nkDeelnemersService', ['$http',

    function ($http) {
        return {
            getDeelnemers: function() {
                return $http.get("./data/deelnemers/deelnemers.json");
            }
        }
    }]);
