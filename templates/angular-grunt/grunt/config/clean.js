// Empties folders to start fresh
module.exports = function (grunt, options) {
    return {
        dist: {
            files: [{
                dot: true,
                src: [
                    options.paths.server,
                    options.paths.dist + '/{,*/}*',
                    '!' + options.paths.dist + '/.git{,*/}*',
                    '*.zip'
                ]
            }]
        },
        server: {
            files: [{
                dot: true,
                src: [
                    options.paths.server
                ]
            }]

        }
    };
};
