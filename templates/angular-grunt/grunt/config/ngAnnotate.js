// ng-annotate tries to make the code safe for minification automatically
// by using the Angular long form for dependency injection.
module.exports = function (grunt, options) {

    return {
        dist: {
            files: [{
                expand: true,
                cwd: options.paths.server + '/concat/scripts',
                src: '*.js',
                dest: options.paths.server + '/concat/scripts'
            }]
        }
    };
};