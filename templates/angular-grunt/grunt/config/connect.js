// The actual grunt server settings
module.exports = function (grunt, options) {

    return {
        options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: 35729
        },
        livereload: {
            options: {
                open: true,
                middleware: function (connect) {
                    return [
                        connect.static(options.paths.server),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        connect().use(
                            options.paths.app + 'static/styles',
                            connect.static(options.paths.app + 'static/styles')
                        ),
                        connect.static(options.paths.app),
                    ];
                }
            }
        },
        test: {
            options: {
                port: 9001,
                middleware: function (connect) {
                    return [
                        connect.static(options.paths.server),
                        connect.static('test'),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        connect.static(options.paths.app)
                    ];
                }
            }
        },
        'staging-test': {
            options: {
                port: 9002,
                middleware: function (connect) {
                    return [
                        connect.static(options.paths.server),
                        connect.static('test'),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        connect.static(options.paths.app)
                    ];
                }
            }
        },
        dist: {
            options: {
                open: true,
                base: options.paths.dist
            }
        }
    };
};
