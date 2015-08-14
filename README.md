# Lazybones Angular Grunt Template

The Lazybones Angular Grunt Template provides a template to create Angularjs applications built with the Grunt task runner.
The dependencies in the created application are managed by Bower.

## Angularjs and Bower

The versions of all Bower packages in this template are fixed. Setting these values is not available when creating a project
with this template. The versions are as follows:

* angular  1.4.3
* bootstrap  3.3.4
* angular-cookies  1.4.3
* angular-messages  1.4.3
* ng-breadcrumbs  0.4.1
* angular-route  1.4.3
* angular-sanitize  1.4.3
* select2  4.0.0-rc.2
* angular-mocks  1.4.3
* angular-bootstrap  ~0.13.0
* angular-datepicker  ~1.0.1

## Nodejs

The template creates a project managed by node, all node packaged included in the template have fixed versions on creation. The ability to specify the required versions when creating a project from this template is not provided. The packages and versions are as follows:

### Dependencies

* body-parser  ^1.0.2
* debug  ~2.1.1
* error-handler  ^0.1.4
* express  ~4.1.1
* glob  ^5.0.13
* https  ^1.0.0
* jade  ^1.9.2
* load-grunt-configs  ^0.4.3
* method-override  ^1.0.0
* morgan  ^1.0.0
* path  ^0.11.14
* serve-favicon  ~2.2.0

### Dev Dependencies

* autoprefixer-core  ^5.2.1
* grunt  ^0.4.5
* grunt-concurrent  ^1.0.0
* grunt-contrib-clean  ^0.6.0
* grunt-contrib-compress  ^0.13.0
* grunt-contrib-concat  ^0.5.0
* grunt-contrib-connect  ^0.9.0
* grunt-contrib-copy  ^0.7.0
* grunt-contrib-cssmin  ^0.12.0
* grunt-contrib-htmlmin  ^0.4.0
* grunt-contrib-imagemin  ^0.9.2
* grunt-contrib-jshint  ^0.11.0
* grunt-contrib-uglify  ^0.7.0
* grunt-contrib-watch  ^0.6.1
* grunt-file-creator  ^0.1.3
* grunt-filerev  ^2.1.2
* grunt-google-cdn  ^0.4.3
* grunt-injector  ^0.6.0
* grunt-karma  *
* grunt-newer  ^1.1.0
* grunt-ng-annotate  ^0.9.2
* grunt-ng-constant  ^1.1.0
* grunt-postcss  ^0.5.5
* grunt-protractor-runner  ^2.0.0
* grunt-svgmin  ^2.0.0
* grunt-usemin  ^3.0.0
* grunt-wiredep  ^2.0.0
* jasmine-reporters  ^2.0.6
* jshint-stylish  ^1.0.0
* karma-jasmine  *
* karma-phantomjs-launcher  *
* load-grunt-tasks  ^3.1.0
* phantomjs  ^1.9.16
* protractor  ^2.0.0
* protractor-html-screenshot-reporter  0.0.19
* shelljs  ^0.4.0
* time-grunt  ^1.0.0

## Grunt

### Tasks

The created project contains a number of standard grunt tasks including; clean, concurrent, connect, postcss e.t.c. Task configuration has been placed in config specific file located in the `grunt/config` directory from the Gruntfile to reduce the file size. This also the case with the grunt tasks, they are located in the `grunt/tasks` directory. This is achieved by loading the grunt config and tasks at runtime via the `load-grunt-tasks` node package.

### Angular Environment

The Angular-Grunt template also provides tasks that allow some parts of the angular application to be environment specific. A `config.js` file is created at runtime by the `grunt-ng-constant` package. The file contains environment specific constant values. You can add constants to this file by adding them to the `config/appConfig.json` file. Ensure that your angular module has a dependency on the `config` module to use these constant values in the application.  

Logic has also been included in the template to dynamically create the main `app.js` file containing the main module name and initialisation at runtime. This has been provided so that environment specific config can be used when running the application based on the `src/app/devApp.js` and `src/app/prodApp.js` files. Mocked configuration and http responses can be placed in the `prodApp.js` file for use in development and test modes while the production logic can be placed in the `prodApp.js` file for production.

## Serve

A number of grunt tasks have been provided to run the server in different environments:

* serve-staging: Run the application using a live back-end application.
* serve-development: Run the application with data provided from mocked responses.
* serve-local: Run the application against a live local back-end application.

## Tests

The template includes a test directory containing `unit`, `e2e` and `e2e-staging` directories and grunt tasks for each test type. `e2e-staging` is not a standard testing convention, it has been provided to allow developers to create integration tests that use a live back-end server to fully test the code. The configuration for each of the test types can be found in the `test`, `grunt/config` and `grunt/task` directories.

The test tasks are:

* test-env: Configure the test environment.
* test-local: Calls the test-env task before testing the application locally with mocked data.
* test-staging: Calls the test-env task before testing the application against a live back-end application.
* karma-test: Calls the test-env task before running the karma tests.
* protractor-chrome: Calls the test-env task before running the protractor tests in the chrome browser.
* protractor-headless: Calls the test-env task before running the protractor tests in the phantomjs browser.
* protractor-staging-chrome: Calls the test-env task before running the protractor tests in the chrome browser against a live back-end application.
* protractor-staging-headless: Calls the test-env task before running the protractor tests in the phantomjs browser against a live back-end application.

NOTE: You must manually start the web manager before running the protractor tests. It is suggested that you add the web manager as a service.

## Build

The build tasks performs a number of grunt tasks such as; clean, ngconstant, cssmin, filerev, uglify e.t.c before compressing the `dist` directory into a releasable zip file.
