// Copies remaining files to places other tasks can use
module.exports = function (grunt, options) {

    return {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: options.paths.app,
                dest: options.paths.dist + '/src/app',
                src: [
                    '*.{ico,png,txt}',
                    '.htaccess',
                    '*.html',
                    'static/app/**/{,*/}*.html',
                    'static/images/{,*/}*.{webp}',
                    'static/styles/fonts/{,*/}*.*'
                ]
            }, {
                expand: true,
                cwd: options.paths.server + '/src/static/images',
                dest: options.paths.dist + '/src/static/images',
                src: ['generated/*']
            }, {
                expand: true,
                cwd: 'bower_components/bootstrap/dist',
                src: 'fonts/*',
                dest: options.paths.dist + '/src/app'
            }]
        },
        prod: {
            files: [{
                expand: true,
                dot: true,
                dest: options.paths.dist,
                src: [
                    'server.js',
                    'app-scripts/start-node',
                    'package.json'
                ]
            }]
        },
        styles: {
            expand: true,
            cwd: options.paths.app + '/static/styles',
            dest: options.paths.server + '/static/styles/',
            src: '{,*/}*.css'
        }
    };
};
