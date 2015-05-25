/**
 * Load Uitslagen Service (loads uitslagen from JSON files)
 */
angular.module('altisNKMasters').factory('nkLoadUitslagenService', ['nkUitslagenService',

    function (nkUitslagenService) {

        return {

            loadUitslagenKogelslingeren: function() {

                var uitslagenKogelslingeren = [];

                loadJSONKogelslingeren("./data/uitslagen/", "uitslag-kogelslingeren-groep1");
                loadJSONKogelslingeren("./data/uitslagen/", "uitslag-kogelslingeren-groep2");
                loadJSONKogelslingeren("./data/uitslagen/", "uitslag-kogelslingeren-groep3");
                loadJSONKogelslingeren("./data/uitslagen/", "uitslag-kogelslingeren-groep4");

                return uitslagenKogelslingeren;

                function loadJSONKogelslingeren(uitslagDir, uitslagFile) {
                    nkUitslagenService.getUitslagen(uitslagDir, uitslagFile).then(
                        function(response) {
                            concatUitslagenKogelslingeren(response.data);
                        }
                    );
                }

                function concatUitslagenKogelslingeren(uitslagen) {
                    for (var i = 0; i < uitslagen.length; i++) {
                        uitslagenKogelslingeren.push(uitslagen[i]);
                    }
                }
            },

            loadUitslagenGewichtwerpen: function() {

                var uitslagenGewichtwerpen = [];

                loadJSONGewichtwerpen("./data/uitslagen/", "uitslag-gewichtwerpen-groep1");
                loadJSONGewichtwerpen("./data/uitslagen/", "uitslag-gewichtwerpen-groep2");
                loadJSONGewichtwerpen("./data/uitslagen/", "uitslag-gewichtwerpen-groep3");
                loadJSONGewichtwerpen("./data/uitslagen/", "uitslag-gewichtwerpen-groep4");

                return uitslagenGewichtwerpen;

                function loadJSONGewichtwerpen(uitslagDir, uitslagFile) {
                    nkUitslagenService.getUitslagen(uitslagDir, uitslagFile).then(
                        function(response) {
                            concatUitslagenGewichtwerpen(response.data);
                        }
                    );
                }

                function concatUitslagenGewichtwerpen(uitslagen) {
                    for (var i = 0; i < uitslagen.length; i++) {
                        uitslagenGewichtwerpen.push(uitslagen[i]);
                    }
                }
            }
        }


    }]);

