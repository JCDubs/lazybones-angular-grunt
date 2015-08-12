/**
 * Register the server Grunt tasks.
 * @param grunt
 */
module.exports = function(grunt) {

    grunt.registerTask('serve-staging', 'Compile then start a connect web server', function () {
        grunt.task.run([
            'serve:staging'
        ]);
    });

    grunt.registerTask('serve-development', 'Compile then start a connect web server', function () {
        grunt.task.run([
            'serve:development'
        ]);
    });

    grunt.registerTask('serve-local', 'Compile and serve, connecting to localhost back end', function () {
        grunt.task.run([
            'serve:local'
        ]);
    });
};