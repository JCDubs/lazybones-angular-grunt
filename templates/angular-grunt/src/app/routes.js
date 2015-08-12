/*
 * Not for redistribution.
 * Copyright (c) ${companyName}.
 */
'use strict';

/**
 * Define the application routes along with the controllers and the breadcrumb messages.
 * @author Jason Conway-Williams <jason@app.uk.com>
 */
angular.module('${moduleName}')
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

        //Create an interceptor to check the request for a 401 - Unauthorised status.
        $httpProvider.interceptors.push('httpRequestInterceptor');

        $routeProvider
            .when('/login', {
                templateUrl: 'views/pages/login/index.html',
                controller: 'AuthController',
                controllerAs: 'authenticationController'
            })
            .otherwise({redirectTo: '/login'});
    }]);
