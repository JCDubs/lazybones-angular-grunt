/**
 * Register the test Grunt task.
 * @param grunt
 */
module.exports = function(grunt) {

    grunt.registerTask('test-env', function(target){

        var fileEnv = 'development';
        var envType = 'test';

        if(target === "staging"){
            fileEnv = "production";
            envType = 'staging-test';
        }

        grunt.task.run(['clean:server',
            'ngconstant:' + target,
            'file-creator:' + fileEnv,
            'injector',
            'wiredep',
            'concurrent:test',
            'postcss',
            'jshint:all',
            'jshint:test',
            'connect:'+ envType]);
    });

    grunt.registerTask('karma-test', [
        'test-env:development',
        'karma'
    ]);

    grunt.registerTask('protractor-chrome', [
        'test-env:development',
        'protractor:chrome'
    ]);

    grunt.registerTask('protractor-headless', [
        'test-env:development',
        'protractor:headless'
    ]);

    grunt.registerTask('protractor-staging-chrome', [
        'test-env:staging',
        'protractor:staging_chrome'
    ]);

    grunt.registerTask('protractor-staging-headless', [
        'test-env:staging',
        'protractor:staging_headless'
    ]);

    grunt.registerTask('test-local', ['test-env:development', 'karma', 'protractor:headless']);
    grunt.registerTask('test-staging', ['test-env:staging', 'protractor:headless']);
    //TODO: Add the 'test-staging' task to the 'test' task once the dev crowd and test server is up and running.
    grunt.registerTask('test', ['test-local']);
};