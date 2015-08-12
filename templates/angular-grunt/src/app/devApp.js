/*
 * Not for redistribution.
 * Copyright (c) ${companyName}.
 */

(function(){

    'use strict';

/**
 * Security UI application development main module.
 * @author Jason Conway-Williams <jason@app.uk.com>
 */
angular.module('${moduleName}',
    ['ngRoute', 'ngCookies', 'ng-breadcrumbs', 'config','ui.bootstrap', 'ngMockE2E', 'ngFileUpload', 'datePicker'])
    .run(['$httpBackend', 'authentication', '$location', function ($httpBackend, authentication, $location) {

        var devUser = {
            userDetails: {
                firstname: 'Dev',
                lastname: 'User',
                fullname: 'Dev User',
                email: 'devuser@app.uk.com'
            },
            accessToken: 'SDFHFHKDKSOFDJFJFJJFJKFDODJ'
        };

        //Authenticate the dev user on startup.
        authentication.setNextUrl($location.path());
        authentication.authenticate('Dev', 'password');

        //Provide a mocked authentication success and failure login path.
        $httpBackend.whenPOST('/api/v1/login', {username: 'fail', password: 'fail'}).respond(401);
        $httpBackend.whenPOST('/api/v1/login', {username: 'Dev', password: 'password'}).respond(200, devUser);
        $httpBackend.whenPOST('mockData/scan-detail.json').respond(200, {'message':'Success'});

        $httpBackend.whenGET(/views\/.*/).passThrough();
        $httpBackend.whenGET(/styles\/.*/).passThrough();
        $httpBackend.whenGET(/mockData\/.*/).passThrough();
        $httpBackend.whenPOST(/http:.*/).passThrough();
        $httpBackend.whenPUT(/.*/).respond(200, {'message':'Success'});
        $httpBackend.whenPOST(/.*/).respond(200, {'message':'Success'});
        $httpBackend.whenGET(/.*/).respond(401);
    }]);
})();
