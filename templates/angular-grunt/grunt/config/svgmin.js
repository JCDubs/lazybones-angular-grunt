// Performs rewrites based on filerev and the useminPrepare configuration
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= paths.app %>/static/images',
            src: '{,*/}*.svg',
            dest: '<%= paths.dist %>/src/static/images'
        }]
    }
}
