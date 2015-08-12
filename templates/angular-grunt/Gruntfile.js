/*
 * Not for redistribution.
 * Copyright (c) ${companyName}.
 */
'use strict';

module.exports = function (grunt) {

    var options = {
        // Project settings
        paths: {
            // Configurable paths
            app: require('./bower.json').appPath || 'src',
            dist: 'dist',
            server:'.tmp'
        },
        config : {
            src: 'grunt/config/*.js',
            appName: grunt.file.readJSON('package.json').name,
            version: grunt.file.readJSON('package.json').version,
            devConfig: grunt.file.readJSON('config/appConfig.json').development,
            prodConfig: grunt.file.readJSON('config/appConfig.json').production,
            apiServerConfig: grunt.file.readJSON('config/appConfig.json').apiServerUrl,
            events: grunt.file.readJSON('config/appConfig.json').events,
            cookieName: grunt.file.readJSON('config/appConfig.json').userCookieName,
            devAppContents: grunt.file.read('src/app/devApp.js'),
            prodAppContents: grunt.file.read('src/app/prodApp.js')
        }
    };

    // Define the configuration for all the tasks
    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);


    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load all of the tasks.
    grunt.loadTasks('grunt/tasks');
};
