'use strict';

// App level module
angular.module('altisNKMasters', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/news");

        // States
        $stateProvider
            .state('home', {
                url: "/news",
                templateUrl: "partials/news.html"
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
            });

    });
