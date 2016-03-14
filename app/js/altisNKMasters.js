'use strict';

// App level module
angular.module('altisNKMasters', ['ui.router', 'ui.bootstrap'])

    .config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

            // For any unmatched url, redirect to:
            $urlRouterProvider.otherwise("/news");

            // States
            $stateProvider
                .state('home', {
                    url: "/news",
                    templateUrl: "partials/news.html"
                })
                .state('nieuwsarchief', {
                    url: "/newsarchive",
                    templateUrl: "../partials/nieuwsarchief.html"
                })
                .state('programma', {
                    url: "/programma",
                    templateUrl: "partials/programma.html"
                })
                .state('inschrijven', {
                    url: "/inschrijven",
                    templateUrl: "partials/inschrijven.html"
                })
                .state('deelnemers', {
                    url: "/deelnemers",
                    templateUrl: "partials/deelnemers.html"
                })
                .state('uitslagen', {
                    url: "/uitslagen",
                    templateUrl: "partials/uitslagen.html"
                })
                .state('route', {
                    url: "/route",
                    templateUrl: "partials/route.html"
                })
                .state('contact', {
                    url: "/contact",
                    templateUrl: "partials/contact.html"
                })
                .state('sponsors', {
                    url: "/sponsors",
                    templateUrl: "partials/sponsors.html"
                })
                .state('doemee', {
                    url: "/doemee",
                    templateUrl: "../partials/doemee.html"
                });

        }]);

