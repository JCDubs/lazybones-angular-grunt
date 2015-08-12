// Add vendor prefixed styles
module.exports = function (grunt, options) {
    return {
        options: {
            map: true,
            processors: [
                require('autoprefixer-core')({browsers: ['last 1 version']})
            ]
        },
        server: {
            options: {
                map: true
            },
            files: [{
                expand: true,
                cwd: options.paths.server + '/static/styles/',
                src: '{,*/}*.css',
                dest: options.paths.server + '/static/styles/'
            }]
        },
        dist: {
            files: [{
                expand: true,
                cwd: options.paths.server + '/static/styles/',
                src: '{,*/}*.css',
                dest: options.paths.server + '/static/styles/'
            }]
        }
    };
};
