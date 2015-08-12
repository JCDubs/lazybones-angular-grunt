// Performs rewrites based on filerev and the useminPrepare configuration
module.exports = function (grunt, options) {

    return {
        dist: {
            files: [{
                expand: true,
                cwd: options.paths.app + '/static/images',
                src: '{,*/}*.{png,jpg,jpeg,gif}',
                dest: options.paths.dist + '/static/images'
            }]
        }
    };
};
