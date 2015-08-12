// Replace Google CDN references
module.exports = function (grunt, options) {
    return {
        dist: {
            html: [ options.paths.dist + '/src/*.html']
        }
    };
};
