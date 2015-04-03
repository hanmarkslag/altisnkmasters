/**
 * Filter for filtering deelnemers
 */
angular.module("altisNKMasters").filter("searchDeelnemer", function() {

    return function(deelnemers, searchText) {

        var result = [];

        if (searchText === undefined || searchText === '') {
            return deelnemers;
        };

        searchText = searchText.toLowerCase();

        angular.forEach(deelnemers, function(deelnemer) {
            if ((deelnemer.naam.toLowerCase().indexOf(searchText) != -1)
                || (deelnemer.vereniging.toLowerCase().indexOf(searchText) != -1)
                || (deelnemer.categorie.toLowerCase().indexOf(searchText) != -1)) {
                result.push(deelnemer);
            }
        });

        return result;
    };
});