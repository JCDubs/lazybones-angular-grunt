// Automatically inject Bower components into the app
module.exports = {
    options: {
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: /\.\.\//,
        overrides: {}
    },
    test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        fileTypes:{
            js: {
                block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                detect: {
                    js: /'(.*\.js)'/gi
                },
                replace: {
                    js: '\'{{filePath}}\','
                }
            }
        }
    }
}