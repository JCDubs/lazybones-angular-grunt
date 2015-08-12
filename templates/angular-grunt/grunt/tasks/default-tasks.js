/**
 * Register the default Grunt tasks.
 * @param grunt
 */
module.exports = function(grunt) {

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        var files = 'production';
        if (target === 'development') {
            files = 'development';
        }

        grunt.task.run([
            'clean:server',
            'ngconstant:' + target,
            'file-creator:' + files,
            'injector:bower_dependencies',
            'injector:app_dependencies',
            'concurrent:server',
            'postcss:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};