// Renames files for browser caching purposes
module.exports = function (grunt, options) {

    return{
        dist: {
            src: [
                options.paths.dist + '/src/app/{,*/}*.js',
                options.paths.dist + '/src/static/styles/{,*/}*.css',
                options.paths.dist + '/src/static/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                options.paths.dist + '/src/static/styles/fonts/*'
            ]
        }
    };
};
