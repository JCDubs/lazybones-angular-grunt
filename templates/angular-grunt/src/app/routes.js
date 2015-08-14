/*
 * Not for redistribution.
 * Copyright (c) ${companyName}.
 */
'use strict';

/**
 * Application routes.
 */
angular.module('${moduleName}')
    .config(['\$routeProvider', '\$httpProvider', function (\$routeProvider, \$httpProvider) {

        \$routeProvider
            .when('/login', {
                //Add login configuration.
            })
            .otherwise({redirectTo: '/login'});
    }]);
