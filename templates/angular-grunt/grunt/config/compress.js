module.exports = function (grunt, options) {
    return {
        production: {
            options: {
                archive: options.config.appName + '-' + options.config.version + '.zip'
            },
            expand: true,
            cwd: options.paths.dist + '/',
            src: ['**/*'],
            dest: './'
        }
    };
};