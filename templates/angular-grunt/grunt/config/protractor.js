// Protractor test settings.
module.exports = {
    options: {
        args: {
        }
    },
    chrome: {
        options: {
            configFile: 'test/e2e.conf.js',
            args: {}
        }
    },
    headless :{
        options: {
            configFile: 'test/e2e.headless.conf.js',
            args: {}
        }
    },
    staging_headless :{
        options: {
            configFile: 'test/e2e.staging.headless.conf.js',
            args: {}
        }
    },
    staging_chrome :{
        options: {
            configFile: 'test/e2e.staging.conf.js',
            args: {}
        }
    }
}