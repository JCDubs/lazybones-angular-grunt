// Watches files for changes and runs tasks based on the changed files
module.exports = {
    bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
    },
    js: {
        files: ['<%= paths.app %>/app/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
            livereload: '<%= connect.options.livereload %>'
        }
    },
    jsTest: {
        files: ['test/unit/*.js'],
        tasks: ['newer:jshint:test', 'karma']
    },
    styles: {
        files: ['<%= paths.app %>/static/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'postcss']
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= paths.app %>/{,*/}*.html',
            '.tmp/static/styles/{,*/}*.css',
            '<%= paths.app %>/static/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    }
}
