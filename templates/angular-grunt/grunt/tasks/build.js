/**
 * Register the build Grunt tasks.
 * @param grunt
 */
module.exports = function(grunt) {

    grunt.registerTask('build-staging', 'Execute the staging build task.', [
        'newer:jshint',
        'test',
        'build:staging'
    ]);

    grunt.registerTask('build', 'Execute the build task with target development, staging or production.', function(target){

        if(!target){
            target = 'production';
        }

        grunt.task.run([
            'clean:dist',
            'ngconstant:' + target,
            'file-creator:production',
            'injector',
            'useminPrepare',
            'concurrent:dist',
            'postcss',
            'concat',
            'ngAnnotate',
            'copy:dist',
            'cdnify',
            'cssmin',
            'uglify',
            'filerev',
            'usemin',
            'htmlmin',
            'copy:prod',
            'compress:production'
        ]);
    });
};