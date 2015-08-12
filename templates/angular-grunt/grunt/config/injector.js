// Automatically inject Bower components into the app
module.exports = {
    options: {
        bowerPrefix:'bower:',
        ignorePath:'src/',
        addRootSlash:false
    },
    app_dependencies: {
        files: {
            'src/index.html': ['src/app/**/*.js', 'src/static/styles/**/*.css', '!src/app/devApp.js', '!src/app/prodApp.js']
        }
    },
    bower_dependencies: {
        files: {
            'src/index.html': ['bower.json'],
        }
    }
}
