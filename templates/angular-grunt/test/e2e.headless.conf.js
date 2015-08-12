var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['e2e/*Spec.js'],
    capabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path
    },
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '/tmp/protractor-reports',
            takeScreenShotsOnlyForFailedSpecs: true,
            docName: 'index.html'
        }));
    }
}