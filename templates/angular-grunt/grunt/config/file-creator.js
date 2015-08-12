
// Create the app.js file based on the environment (development or production).
module.exports = function(grunt, options) {
    return {
        development: {
            'src/app/app.js': function(fs, fd, done) {
                fs.writeSync(fd, options.config.devAppContents);
                done();
            }
        },
        production:{
            'src/app/app.js': function(fs, fd, done) {
                fs.writeSync(fd, options.config.prodAppContents);
                done();
            }
        }
    };
};
