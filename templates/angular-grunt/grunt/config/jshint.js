// Make sure code styles are up to par and there are no obvious mistakes
module.exports = function (grunt, options) {

    return {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        all: {
            src: [
                'Gruntfile.js',
                options.paths.app + '/app/{,*/}*.js'
            ]
        },
        test: {
            options: {
                jshintrc: 'test/.jshintrc'
            },
            src: ['test/unit/*.js']
        }
    };
};
