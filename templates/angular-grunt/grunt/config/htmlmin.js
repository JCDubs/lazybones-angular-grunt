// Performs rewrites based on filerev and the useminPrepare configuration
module.exports = function (grunt, options) {

    return {
        dist: {
            options: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true,
                removeOptionalTags: true
            },
            files: [{
                expand: true,
                cwd: options.paths.dist + '/src/app',
                src: ['*.html', 'views/{,*/}*.html'],
                dest: options.paths.dist + '/src/app'
            }]
        }
    };
};
